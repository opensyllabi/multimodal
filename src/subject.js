const fs = require('fs')
const pug = require('pug')
const path = require('path')
const pdf = require('html-pdf')
const utils = require('./utils.js')
const file_mgmt = require('./file-mgmt.js')

class Subject {
  constructor(data){
    this.id = data.id ? data.id : generateId(data.name)
    this.name = data.name.trim()
    this.path = data.path
    this.description = data.description
    this.created = new Date()
    this.updated = null
    this.topics = []

    this.init()
  }

  init(){
    //add to the internal data
    let subjects = JSON.parse(fs.readFileSync(`${__dirname}/data/subjects.json`))
    let data = this.toJSON()
    subjects.push(data)
  	fs.writeFileSync(`${__dirname}/data/subjects.json`, JSON.stringify(subjects))

    //create subject folder locally
    utils.touchDirectory(`${__dirname}/app/imports/${this.name}/topics`)

    //write the subject file locally
    fs.writeFileSync(`${__dirname}/app/imports/${this.name}/subject.json`, JSON.stringify(data))
  }

  static remove(subject){
    console.log(`[SUBJECT] deleting ${subject.name}...`);
    return new Promise((resolve, reject) => {

      console.log('[SUBJECT] first from the subjects list');
      let foundSubject = false
      let subjects = JSON.parse(fs.readFileSync(`${__dirname}/data/subjects.json`))
      for(let i = 0; i < subjects.length; i++){
        if(subjects[i].id == subject.id){
          foundSubject = true
          console.log('[SUBJECT] found the subject to be deleted...');
          subjects.splice(i, 1)
          console.log('[SUBJECT] deleted from local list...');
        }
      }

      if(!foundSubject)
        reject({
          err: 404,
          info: "could not find the subject"
        })

      console.log('[SUBJECT] then the local folder..');
      try{
        utils.deleteFolderRecursive(`${__dirname}/app/imports/${subject.name}/`)
        resolve()
      }catch (e){
        console.log(e);
        reject(e)
      }
    })
  }

  static importFrom(path){
    console.log(`[SUBJECT] importing from ${path}...`)
    return new Promise((resolve, reject) => {
      try {
        let file = file_mgmt.extract(path)
        console.log('subject',file);
        resolve(file)
      } catch (e) {
        reject(e)
      }
    })
  }

  static export(data, type, path){
    console.log(`[SUBJECT] exporting - ${data.subject} - ${type}`);
    let topics_to_export = []
    return new Promise((resolve, reject) => {

      if(data.name){ //-- we are exporting one specific topic
        let c = JSON.parse(fs.readFileSync(`${__dirname}/app/imports/${data.subject}/topics/${data.name}/topic.json`))
        topics_to_export.push(c)
      }else{ //-- we are exporting all of them
        let s = JSON.parse(fs.readFileSync(`${__dirname}/app/imports/${data.subject}/subject.json`))

        for(let t of s.topics){
          let c = null
          try{
            c = JSON.parse(fs.readFileSync(`${__dirname}/app/imports/${data.subject}/topics/${t.name}/topic.json`))
          }catch(e){
            console.log(`[SUBJECT] couldn't open ${t.name} for export`);
          }

          if(c != null)
            topics_to_export.push(c)
        }

        console.log(`[SUBJECT] found ${topics_to_export.length} topics to export`);
      }

      if(type == 'html'){
        //copy all assets over to new folder
        utils.touchDirectory(`${path}/${data.subject}_assets/`)

        for(let topic of topics_to_export){
          for(let concept of topic.concepts)
            for(let page of concept.pages)
              for(let prep of page.preps)
                if(prep.type == 'img' || prep.type == 'vid')
                  fs.createReadStream(`${prep.src}`).pipe(fs.createWriteStream(`${path}/${topic.subject.name}_assets/${prep.name}`))

          let render = pug.renderFile(`${__dirname}/views/export.pug`, topic)
          fs.writeFileSync(`${path}/${topic.name}.html`, render)
        }

        let subject = JSON.parse(fs.readFileSync(`${__dirname}/app/imports/${data.subject}/subject.json`))
        subject.topics = topics_to_export
        let index = pug.renderFile(`${__dirname}/views/export-index.pug`, subject)
        fs.writeFileSync(`${path}/index.html`, index)
        resolve()
      }else if(type == 'pdf'){
        let counter = 0 //-- to keep track of how many renders we've finished

        //-- first copy all the media assets and html to a temp folder
        utils.touchDirectory(`${__dirname}/app/imports/temp/${data.subject}_assets/`)
        for(let topic of topics_to_export){
          for(let concept of topic.concepts)
            for(let page of concept.pages)
              for(let prep of page.preps)
                if(prep.type == 'img' || prep.type == 'vid')
                  fs.createReadStream(`${prep.src}`).pipe(fs.createWriteStream(`${__dirname}/app/imports/temp/${topic.subject.name}_assets/${prep.name}`))

          //-- create the html stream
          let render = pug.renderFile(`${__dirname}/views/export.pug`, topic)

          //-- generate the pdf
          let options = {
            border: {
              top: "0.2in",
              right: "0.125in",
              bottom: "0.2in",
              left: "0.125in"
            },
            format: 'A4'
          }
          pdf.create(render, options).toFile(`${path}/${topic.name}.pdf`, (err, res) => {
            if(err){
              console.log(err);
              utils.deleteFolderRecursive(`${__dirname}/app/imports/temp/`)
              reject(err)
            }else{
              if(++counter == topics_to_export.length){
                utils.deleteFolderRecursive(`${__dirname}/app/imports/temp/`)
                resolve()
              }
            }
          })
        }

      }else{
        console.log('[SUBJECT] got wrong type');
        reject()
      }
    })
  }

  toJSON(){
    return {
      "id": this.id,
      "name": this.name,
      "path": this.path,
      'description': this.description,
      "created": this.created,
      "topics": this.topics
    }
  }
}

let generateId = (n) => {
  let id = ''
  for(let i = 0; i < 15; i++)
    id += Math.floor(Math.random()*10).toString()

  return id
}

module.exports = Subject

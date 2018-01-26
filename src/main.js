const electron = require('electron')
const ipc = electron.ipcMain
const app = electron.app
const BrowserWindow = electron.BrowserWindow

//const path = require('path')
//const url = require('url')
const fs = require('fs')
const pug = require('pug')

let mainWindow

let lesson = {
	'class':'commlab',
	'name':'webdesign',
	'template':'lesson'
}

let generateLesson = (data) => {
	let c = JSON.parse(fs.readFileSync(__dirname+'/../lessons/'+data.course+'/'+data.lesson+'.json'))
	let compiled = pug.renderFile('views/'+ lesson.template + '.pug', c)

	fs.writeFileSync(__dirname+'/../app/'+data.lesson+'.html', compiled)
}

let listLessons = () => {
	let data = {
		'classes':[]
	}

	let classes = fs.readdirSync(__dirname+'/../lessons')

	for(let cl of classes){
		
		let _class = {
			'title':cl,
			'lessons': []
		}

		let lessons = fs.readdirSync(__dirname+'/../lessons/'+cl)

		for(let l of lessons){
			let lesson_name = l.substring(0, l.indexOf('.'))
			_class.lessons.push(lesson_name)	
		}

		data.classes.push(_class)
	}

	let compiled = pug.renderFile('views/welcome.pug', data)
	fs.writeFileSync(__dirname+'/../app/welcome.html', compiled)
}


let createWindow = (current, _width, _height) => {
	
	if(current.lesson == 'welcome')
		listLessons()
	else
		generateLesson(current)

	mainWindow = new BrowserWindow({width: _width, height: _height, icon: __dirname + '/icon-tmp.png'})

	mainWindow.loadURL('file:///'+__dirname+'/../app/'+current.lesson+'.html')

	mainWindow.toggleDevTools()

	mainWindow.on('closed', () => {
		mainWindow = null
	})
}


// ------------------------------
// ------------------------------ IPC MESSAGES
// -----------------------------

ipc.on('open-lesson', (event, data) => {
	createWindow(data, 1800, 1000)
})

ipc.on('save-session', (event, data) => {
	console.log('received', data[0])
})

app.on('ready', () => { createWindow({"lesson":'welcome'}, 900, 500) })

app.on('window-all-closed', () => { app.quit() })

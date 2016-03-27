'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

let view = path => `file://${__dirname}/views/${path}`

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.webContents.openDevTools()
  mainWindow.loadURL(view('login.html'))

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

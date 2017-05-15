const electron = require('electron')

const {app,BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadURL(`file://${__dirname}/index.html`)
  //win.openDevTools()
})

exports.openWindow = () => {
    let win = new BrowserWindow({height: 600, width: 300})
    win.loadURL(`file://${__dirname}/otherpage.html`)
}

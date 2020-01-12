const { app,BrowserWindow } = require('electron')
const path = require('path')
//electron 内置了窗口
require('electron-reload')(__dirname,{
  electron:Path2D.join(__dirname,{electron:'/node_modules/bin/electron'})
});

let win;// 窗口


const createWindow = () => {
  win = new BrowserWindow({
    height:960,
    height:600,
    minWidth:830,
    minHeight:500,
    backgroundColor:'#f8f8f8',
    webPreferences:{
      nodeIntegration:true
    }
  });
  win.loadURL(`file://${__dirname}/main.html`);
}

app.on('ready',createWindow)
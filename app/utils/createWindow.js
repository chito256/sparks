const {BrowserWindow} = require('electron')
const fs = require('fs')
const path = require('path')

exports.createWindow = () => {
  const windowDefaults = {
    width: 960,
    height: 640,
    minWidth: 420,
    minHeight: 320,
    icon: path.join(__dirname, '..', '..', 'build', 'icons', '256x256.png')
  };
  let window = new BrowserWindow(windowDefaults)
  window.loadURL(`file://${__dirname}/../index.html`)

  // Get user configuration
  const defaultConfig = path.join(__dirname, '..', 'default-config.json')
  window.userConfig = fs.readFileSync(defaultConfig, 'utf8')

  window.on('closed', () => {
    window = null
  });

  if (process.env.NODE_ENV === 'development') {
    window.openDevTools()
  }
}

const {BrowserWindow, shell} = require('electron')

const help = {
  label: 'Help',
  submenu: [
    {
      label: 'About',
      click: (menuItem, browserWindow) => {
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'Report issues on GitHub',
      click: (menuItem, browserWindow) => {
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'GitHub',
      click: (menuItem, browserWindow) => {
      }
    },
    {
      label: 'Twitter',
      click: (menuItem, browserWindow) => {
      }
    }
  ]
}

module.exports = help

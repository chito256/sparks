const {BrowserWindow} = require('electron');

const edit = {
  label: 'Edit',
  submenu: [
    {
      role: 'copy'
    },
    {
      role: 'cut'
    },
    {
      role: 'paste'
    },
    {
      type: 'separator'
    },
    {
      role: 'redo'
    },
    {
      role: 'undo'
    },
    {
      role: 'delete'
    }
  ]
}

module.exports = edit;
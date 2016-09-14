const {createWindow} = require('../../utils/createWindow');

const file = {
  label: 'File',
  submenu: [
    {
      label: 'New',
      accelerator: 'CmdOrCtrl+N',
      click: (menuItem, browserWindow) => {
        createWindow();
      }
    },
    {
      label: 'Open',
      accelerator: 'CmdOrCtrl+O',
      click: (menuItem, browserWindow) => {
        browserWindow.webContents.send('sparks::open-file');
      }
    },
    {
      label: 'Save',
      accelerator: 'CmdOrCtrl+S',
      click: (menuItem, browserWindow) => {
        browserWindow.webContents.send('sparks::save-file');
      }
    },
    {
      label: 'Save As',
      accelerator: 'CmdOrCtrl+Shift+S',
      click: (menuItem, browserWindow) => {
        const saveAs = true;
        browserWindow.webContents.send('sparks::save-file', saveAs);
      }
    }
  ]
}

module.exports = file;
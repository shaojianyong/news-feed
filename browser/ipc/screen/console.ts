/**
 * Created by WittBulter on 2017/2/16.
 */
const { BrowserWindow } = require('electron');

module.exports = new class Self {
  constructor() {
  }

  open(url) {
    const win = new BrowserWindow({
      width: 1000,
      height: 720,
      show: false,
      frame: false,
      resizable: true,
    });
    win.loadURL(`${url}`);
    win.webContents.openDevTools();
    return win;
  }
}();

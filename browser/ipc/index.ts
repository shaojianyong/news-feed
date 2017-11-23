const {ipcMain} = require('electron');
const api = require('./api');

ipcMain.on('api', (event, actionName, ...args) => {
  const reply = (replayObj, status = 'success') => {
    event.sender.send(`${actionName}reply`, replayObj, status);
  };
  if (api[actionName]) {
    api[actionName](event, ...args).then(res => reply(res))
      .catch(err => reply({message: 'Application Error'})
  );
  }
});

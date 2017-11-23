const screen = require('../screen/index');

module.exports = {
  login: async(e, user) => {
    // todo something
    screen.setSize(1000, 720);
    return { msg: 'ok' };
  },
  logout: async() => {
    // todo something
    screen.setSize(700, 500);
    return { msg: 'ok' };
  },
};

module.exports = {
  getmyinfo: async (req, res) => {
    res.send('get myinfo');
  },

  editmyinfo: async (req, res) => {
    res.send('edit myinfo');
  },

  deletemyinfo: async (req, res) => {
    res.send('delete myinfo');
  },
};

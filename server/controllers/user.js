module.exports = {
  signin: async (req, res) => {
    res.send({ message: 'signin' });
  },

  signout: async (req, res) => {
    res.send('signout');
  },

  signup: async (req, res) => {
    res.send('signup');
  },

  validinfo: async (req, res) => {
    res.send('validinfo');
  },
};

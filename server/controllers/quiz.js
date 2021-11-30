module.exports = {
  getquizs: async (req, res) => {
    res.send('get quizs');
  },

  getquiz: async (req, res) => {
    res.send('get quiz');
  },

  addquiz: async (req, res) => {
    res.send('add quiz');
  },

  editquiz: async (req, res) => {
    res.send('edit quiz');
  },

  clearquiz: async (req, res) => {
    res.send('clear quiz');
  },

  deletequiz: async (req, res) => {
    res.send('delete quiz');
  },
};

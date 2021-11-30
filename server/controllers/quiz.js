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
    //! 비로그인 유저라면 그냥 무시!
    res.send('clear quiz');
  },

  deletequiz: async (req, res) => {
    res.send('delete quiz');
  },
};

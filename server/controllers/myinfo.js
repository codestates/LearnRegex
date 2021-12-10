const { users, quiz, users_quiz } = require('../models');
const { validation, confliction } = require('./inspectfunction');
const bcrypt = require('bcryptjs');
const { sendemail } = require('./mailfunction');
const { getToken } = require('./tokenfunction');

module.exports = {
  // 유저 정보 조회
  getmyinfo: async (req, res) => {
    try {
      const userId = req.userId;

      // 유저 이메일, 닉네임 조회
      const userInfo = await users.findOne({ where: { id: userId }, attributes: ['email', 'nickname', 'socialType'], raw: true });

      // 유저가 만든 퀴즈 갯수 조회
      const makeQuiz = (await quiz.findAndCountAll({ where: { userId: userId } })).count;

      // 유저가 클리어한 퀴즈 갯수 조회
      const clearQuiz = (await users_quiz.findAndCountAll({ where: { userId: userId } })).count;

      // 조회 정보 합쳐서 응답
      const data = { ...userInfo, makeQuiz, clearQuiz };

      return res.status(200).send({ data });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  // 유저 이메일, 닉네임 수정
  editmyinfo: async (req, res) => {
    try {
      const { email, nickname } = req.body;

      // 들어온 요청이 없는 경우
      if (!(email && nickname)) {
        return res.status(400).send({ message: 'empty information' });
      }

      const userId = req.userId;
      // 유저 정보 조회
      const userInfo = await users.findOne({ where: { id: userId }, raw: true });

      const data = { userId, email, nickname };

      // 유저의 소셜타입이 로컬이 아닌 경우 검사내용에서 이메일 제외
      if (userInfo.socialType !== 'local') {
        delete data.email;
      }

      // 수정 내용 유효성 검사
      const isValid = validation(req.body);

      // 수정 내용 중복 검사
      const isConflict = await confliction(data);

      // 유효성, 중복 검사 중 하나라도 검증이 안된 경우
      if (Object.keys(isValid).length || Object.keys(isConflict).length) {
        return res.status(406).send({ data: { isValid, isConflict } });
      }

      // 이메일 변경을 하려는데 socialType이 local이 아닌 경우
      if (userInfo.socialType !== 'local' && userInfo.email !== email) {
        return res.status(403).send({ message: 'socialType is not local' });
      }

      // 기존 이메일을 변경한 경우(우선 기존 이메일 사용 -> 이메일 인증을 하면 그때 변경)
      if (userInfo.email !== email) {
        const token = getToken({ id: userInfo.id, email });

        const html = `<img width="350" alt="learnregex-logo" src="https://user-images.githubusercontent.com/62797565/143479379-106673e5-05e7-4447-9138-979457152e54.png"/>
                    <h3> 안녕하세요 Learn Regex 인증 메일입니다. </h3>
                    <h3> 아래 버튼을 눌러 이메일 인증을 완료해주세요! </h3>
                    <button style="background-color:white"><a style="text-decoration:none; color:black;" href='${process.env.REDIRECT_URI}?token=${token}&state=editemail'>Learn Regex 시작하기!</a></button>`;

        sendemail(email, html);

        return res.status(200).send({ message: 'success' });
      }

      // 수정 내용 적용(닉네임만 바꾼 경우)
      await users.update({ email, nickname }, { where: { id: userId } });

      return res.status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  // 유저 패스워드 수정
  editpassword: async (req, res) => {
    try {
      const userId = req.userId;
      // 변경할 유저 정보 조회
      const userInfo = await users.findOne({ where: { id: userId }, raw: true });

      // socialType이 local이 아닌 경우
      if (userInfo.socialType !== 'local') {
        return res.status(403).send({ message: 'socialType is not local' });
      }
      const { oldPassword, newPassword } = req.body;

      // 현재 비밀번호를 입력하지 않은 경우
      if (!oldPassword) {
        return res.status(400).send({ message: 'empty oldpassword' });
      }

      // 변경할 비밀번호를 입력하지 않은 경우
      if (!newPassword) {
        return res.status(400).send({ message: 'empty newpassword' });
      }

      // oldPassword와 현재 비밀번호가 일치하지 않은 경우
      if (!bcrypt.compareSync(oldPassword, userInfo.password)) {
        return res.status(406).send({ message: 'invalid oldPassword' });
      }

      // newPassword 유효성 검사
      const password = newPassword;
      const isValid = validation({ password });

      if (Object.keys(isValid).length) {
        return res.status(406).send({ data: { isValid } });
      }

      // 변경할 비밀번호 해싱하여 저장
      const salt = bcrypt.genSaltSync(parseInt(Math.random() * 10));
      const hashPassword = bcrypt.hashSync(password, salt);

      await users.update({ password: hashPassword }, { where: { id: req.userId } });

      return res.status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  // 비밀번호 찾기
  findpassword: async (req, res) => {
    if (!req.body.email) {
      return res.status(400).send({ message: 'empty eamil' });
    }
    const email = req.body.email;

    const userInfo = await users.findOne({ where: { email, socialType: 'local' }, attributes: ['id'], raw: true });

    const token = getToken({ id: userInfo.id });

    const html = `<img width="350" alt="learnregex-logo" src="https://user-images.githubusercontent.com/62797565/143479379-106673e5-05e7-4447-9138-979457152e54.png"/>
                    <h3> 안녕하세요 Learn Regex 입니다. </h3>
                    <h3> 아래 버튼을 눌러 새로운 비밀번호를 설정해주세요! </h3>
                    <button style="background-color:white"><a style="text-decoration:none; color:black;" href='${process.env.REDIRECT_URI}/newpw?token=${token}&state=findpassword'>비밀번호 재설정</a></button>`;

    sendemail(email, html);

    res.status(200).send({ message: 'success' });
  },

  // 회원 탈퇴
  deletemyinfo: async (req, res) => {
    try {
      const userId = req.userId;

      // 유저 정보 삭제
      await users.destroy({ where: { id: userId } });

      return res.header({ isLogin: false }).clearCookie('token').status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },
};

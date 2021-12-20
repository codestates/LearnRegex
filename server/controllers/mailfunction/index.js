const nodemailer = require('nodemailer');

module.exports = {
  sendemail: (email, html) => {
    const mailConfig = {
      service: 'Naver',
      host: 'smtp.naver.com',
      port: '587',
      secure: false, // true for 465, false for other ports
      requireTLS: true,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASSWORD,
      },
    };
    let message = {
      from: 'learnreg@naver.com',
      to: email,
      subject: '안녕하세요 Learn Regex입니다.',
      html,
    };
    let transporter = nodemailer.createTransport(mailConfig);
    transporter.sendMail(message);
  },
};

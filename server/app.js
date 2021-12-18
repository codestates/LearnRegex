const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const router = require('./router');
const models = require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());

// ! DevOnly 서버 통신 딜레이 부여
app.use(async function (req, res, next) {
  await setTimeout(function () {
    console.log('getSleep');
    next();
  }, 1500);
});

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    exposedHeaders: 'isLogin',
  })
);

app.use('/', router);
models.sequelize.sync({ force: false });

app.listen(4000, () => console.log('📚📚📚📚 LearnRegex server started ☁️  http://localhost:4000'));

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  })
);

app.use('/', router);
app.listen(4000, () => console.log('📚📚📚📚 LearnRegex server started ☁️  http://localhost:4000'));

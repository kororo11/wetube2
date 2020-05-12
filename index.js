// const express = require('express'); // express 를 찾아서 express 에 담는다.
// babel 설치 후 최신 버젼 방식으로 변환
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express(); // express 함수를 실행해서 app 에 담는다.

const PORT = 4000; // 포트는 언제나 변경 할 수 있게 변수로 빼 놓는다.

// 콘솔에 문구가 찍히게 해준다. 콘솔에 찍힌 url 경로를 command + 클릭 하면 바로 기본 브라우져가 실행 된다.
function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

/* function handleHome(req, res) {
    res.send('Yo Home');
}

function handleProfile(req, res) {
    res.send('Your on my profile');
} */

const handleHome = (req, res) => res.send('Yo Home');

const handleProfile = (req, res) => res.send('Your on my profile');

app.use(cookieParser());
app.use(bodyParser.json()); // 'application/json 방식의 Content-Type 데이터를 받아준다.
// 'application/x-www-form-urlencoded' 방식의 Content-Type 데이터를 받아준다.(jQuery, ajax 의 기본타입)
// extended 옵션이 false 이면 내부적으로 queryString library 를 사용,
// true 이면 내부적으로 qs library를 사용하여 URL-encoded date 를 파싱한다.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));

// get 으로 요청 받아서 주소가 '/' 이라면, handleHome 이라는 함수를 불러와라.
app.get('/', handleHome);

// get 으로 요청 받아서 주소가 '/profile' 이라면, handleProfile 이라는 함수를 불러와라.
app.get('/profile', handleProfile);

// localhost:4000 으로 요청이 들어오면 handleListening 이라는 함수가 실행된다.
app.listen(PORT, handleListening);

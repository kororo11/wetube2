/* 
init.js 에서 application 이 시작된다.
*/

import './db';
import app from './app';
import dotenv from 'dotenv';
dotenv.config();
import './models/Video';

// || 은 또는 이라는 기능으로 process.env.PORT 를 못 찾으면 4000 을 찾으라는 이야기이다.
const PORT = process.env.PORT || 4000;

function handleListening() {
    console.log(`✅Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);

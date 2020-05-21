/* 
init.js 에서 application 이 시작된다.
*/

import './db';
import app from './app';

const PORT = 4000;

function handleListening() {
    console.log(`✅Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);

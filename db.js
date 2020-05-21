import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNuewUrlParse: true,
    useFindAndModify: false,
});

// mongoose.connection() 메서드를 db 라는 변수에 담는다.
const db = mongoose.connection;

const handleOpen = () => console.log('✅ Connected To DB');
const handleError = () => console.log(`❌ Error on DB Connection:${error}`);

// Once connected, the open event is fired on the Connection instance.
db.once('open', handleOpen);
db.on('error', handleError);

/* 
- useNuewUrlParse: true
기본 MongoDB 드라이버는 현재 연결 문자열 파서를 더 이상 사용하지 않습니다. 
이는 주요 변경 사항이므로 useNewUrlParser 플래그를 추가하여 사용자가 새 구문 분석기에서 버그를 발견 한 경우 
이전 구문 분석기로 폴백 할 수 있습니다. 연결을 방해하지 않는 한 useNewUrlParser : true를 설정해야합니다. 
useNewUrlParser : true를 지정하면 mongodb : // localhost : 27017 / dbname과 같은 연결 문자열에 포트를 지정해야합니다. 
새 URL 파서는 mongodb : // localhost / dbname과 같이 포트가없는 연결 문자열을 지원하지 않습니다.

- useFindAndModify: false
기본적으로 False입니다. MongoDB 드라이버의 새로운 연결 관리 엔진을 사용하도록 선택하려면 true로 설정하십시오. 
안정적인 연결을 유지하지 못하는 경우를 제외하고이 옵션을 true로 설정해야합니다.
*/

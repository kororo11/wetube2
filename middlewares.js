import routes from './routes';
// 파일을 업로드 해주는 multer 모듈 사용
import multer from 'multer';

/* 
사용자가 앱에게 전달하는 정보는 크게 텍스트와 파일 2가지로 나눌 수 있다. 여기서는 파일 전달을 알아본다.
###동작개요
    - 파일 선택 form
    - 파일 선택 후 submit 버튼을 누르면 파일 전송
    - 루트 디렉토리 내 videos 폴더에 전송된 파일이 저장

*/

// 입력된 파일이 videos 파일 내에 저장된다.
const multerVideo = multer({ dest: 'uploads/videos/' });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1,
    };
    next();
};

// multerVideo.single(매개변수) 라는 말은 사용자가 전송한 데이터 중에서 만약 videoFile 이 있다면,
// 그 파일을 가공해서 req객체에 file 이라는 프로퍼티를 암시적으로 추가하도록 약속되어 있는 함수이다.
// single() 의 변수는 from 을 통해서 전송된ㄴ 파일의 name 속성을 적으면 된다.
export const uploadVideo = multerVideo.single('videoFile');

/* 
난 늘 동일한 원칙을 따르는데 쪼개서 처리해버리는... 그래서... 여기다가 작성하고 싶지는 않아
여기다 route 를 작성하고 싶진 않아
왜냐면 혹시 나중에...
다른 곳에서 같은 URL 을 사용해야 할 수도 있어
그래서 어디서든 이 URL 을 불러다 쓸거야      -니꼴라스

URL 에 :id 라고하면 express 가 id 의 값이 변하는 걸 인식하는데, id 라고 적으면 단순히 Text 로 인식한다.
*/

// Global
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';

// Users
const USERS = '/users';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';

// Videos
const VIDEOS = '/videos';
const UPLOAD = '/upload';
const VIDEO_DETATIL = '/:id';
const EDIT_VIDEO = '/:id/edit';
const DELETE_VIDEO = '/:id/delete';

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: (id) => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: (id) => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETATIL;
        }
    },
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO,
};

export default routes;

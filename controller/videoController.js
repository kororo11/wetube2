import { videos } from '../db';

export const home = (req, res) => {
    res.render('home', { pageTitle: 'Home', videos });
};
export const search = (req, res) => {
    // ES6 이전의 방식
    // const searchingBy = req.query.term;
    // ES6 이후의 방식
    // 객체 구조분해
    const {
        query: { term: searchingBy }, // 프로퍼티 이름 변경. term 을 searchingBy 로 변경했음.
    } = req;
    res.render('search', { pageTitle: 'Search', searchingBy });
};
// export const videos = (req, res) => {
//     res.render('videos', { pageTitle: 'Videos' });
// };
export const upload = (req, res) => {
    res.render('upload', { pageTitle: 'Upload' });
};
export const videoDetail = (req, res) => {
    res.render('videoDetail', { pageTitle: 'Video Detil' });
};
export const editVideo = (req, res) => {
    res.render('editVideo', { pageTitle: 'Edit Video' });
};
export const deleteVideo = (req, res) => {
    res.render('deleteVideo', { pageTitle: 'Delete Video' });
};

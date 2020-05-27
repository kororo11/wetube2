import routes from '../routes';
import Video from '../models/Video';

// Home

export const home = async (req, res) => {
    try {
        // id를 기준으로 내림차순 정렬합니다.
        const videos = await Video.find({}).sort({ _id: -1 });
        res.render('home', { pageTitle: 'Home', videos });
    } catch (error) {
        console.log(error);
        res.render('home', { pageTitle: 'Home', videos: [] });
    }
};

//  Search
export const search = async (req, res) => {
    // ES6 이전의 방식
    // const searchingBy = req.query.term;
    // ES6 이후의 방식
    // 객체 구조분해
    const {
        query: { term: searchingBy }, // 프로퍼티 이름 변경. term 을 searchingBy 로 변경했음.
    } = req;

    const videos = [];

    try {
        videos = await Video.findOne({ title: { $regex: searchingBy, $options: 'i' } });
    } catch (error) {
        console.log(error);
    }
    res.render('search', { pageTitle: 'Search', searchingBy, videos });
};

// GetUpload

export const getUpload = (req, res) => {
    res.render('upload', { pageTitle: 'Upload' });
};

// PostUpload

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path },
    } = req;

    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description,
    });
    console.log(newVideo);

    // To Do: Upload and save video
    res.redirect(routes.videoDetail(newVideo.id));
    // res.render('upload', { pageTitle: 'Upload' });
};

// VideoDetail

export const videoDetail = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        const video = await Video.findById(id);
        res.render('videoDetail', { pageTitle: video.title, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

// GetEditVideo

export const getEditVideo = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        const video = await Video.findById(id);
        res.render('editVideo', { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        res.redirect(routes.home);
    }
};

// PostEditVideo

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description },
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
};

// DeleteVideo

export const deleteVideo = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        await Video.findOneAndRemove({ _id: id });
    } catch (error) {
        console.log(error);
    }
    res.redirect(routes.home);
};

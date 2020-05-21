import mongoose from 'mongoose';

// schema 는 document 의 구조가 어떻게 생겼는지 알려주는 역할을 합니다.
const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: 'File URL is required',
    },
    title: {
        type: String,
        required: 'Title is required',
    },
    description: String,
    views: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
});

// 어디서든지 사용할 수 있게 export 로 모듈화
const model = mongoose.model('Video', VideoSchema);
export default model;

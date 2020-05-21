import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: 'Text is required',
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

// 어디서든지 사용할 수 있게 export 로 모듈화
const model = mongoose.model('Comment', CommentSchema);
export default model;

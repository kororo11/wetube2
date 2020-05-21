import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/we-tube', {
    useNuewUrlParse: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log('✅ Connected To DB');
const handleError = () => console.log(`❌ Error on DB Connection:${error}`);

db.once('open', handleOpen);
db.once('error', handleError);

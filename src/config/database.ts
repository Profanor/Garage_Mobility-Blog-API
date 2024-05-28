import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DB: string = process.env.MONGODB_URI || '';

const main = async() => {
    try {
        await mongoose.connect(DB);
        console.log('Connected to the database');
    } catch(error) {
        console.error('Error connecting to the MongoDB database:', error);
    }
}
export default main;
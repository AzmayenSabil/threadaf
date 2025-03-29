import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined in .env file')
    }
    if(isConnected) {
        console.log('=> using existing database connection');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log('=> using new database connection');
    } catch (error) {
        console.error('Error connecting to database: ', error);
    }
}
import * as dotenv from 'dotenv';
dotenv.config();

export default () => ({
    jwt: {
        // secret: process.env.JWT_SECRET,
        secret: 'secret',
    },
    database: {
        // uri: process.env.MONGODB_URI,
        uri: 'mongodb://localhost:27017/nestjs-auth',
    }
});
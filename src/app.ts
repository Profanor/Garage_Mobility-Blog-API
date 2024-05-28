import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config(); //configure to use environment variables
import main from './config/database';
main();

//Import routes
import indexRoute from './routes/index';

//Initialize express
const app = express();

//Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));


//Routes
app.use('/', indexRoute);


const PORT = process.env.PORT;
app.listen(PORT, ()=> {
    console.log(`app is listening on port ${PORT}`);
});

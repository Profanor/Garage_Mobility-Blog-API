import express from 'express';
import morgan from 'morgan';
import main from './config/database';
main();

//Import routes
import indexRoute from './routes/index';
import postRoutes from './routes/postRoutes';

//Initialize express
const app = express();

//Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));


//Routes
app.use('/', indexRoute);
app.use('/api/posts', postRoutes);

export default app;
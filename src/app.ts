import express from 'express';
import { Request, Response, NextFunction } from 'express';
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

// Middleware to handle 404 errors
app.use((req: Request, res: Response, next: NextFunction) => {
    const error: any = new Error('Not Found');
    error.status = 404;
    next(error); // Pass the error to the next middleware
  });
  
  // Error-handling middleware
  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message || 'Internal Server Error',
      },
    });
  });




export default app;
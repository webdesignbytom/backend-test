import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import notificationRouter from './routes/notifications.js'

const app = express();
app.disable('x-powered-by');

// Add middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the port and URl
const PORT = process.env.PORT 
const HTTP_URL = process.env.HTTP_URL 

app.use('/')
app.use('/notifications', notificationRouter);

// Start our API server
app.listen(PORT, () => {
  console.log(
    `\nServer is running on ${HTTP_URL}${PORT} \n This no longer consumes souls\n`
  );
});

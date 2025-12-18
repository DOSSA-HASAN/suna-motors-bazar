import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import './config/passport.js';

import authRoutes from './routes/auth.route.js';
import carRoutes from './routes/car.route.js';
import userRoutes from './routes/user.routes.js';
import seedRoutes from './routes/seedRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/users', userRoutes);
app.use('/api/seed', seedRoutes);

app.get('/', (req, res) => res.send('API is running...'));

export default app;

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import './config/passport.js';
import authRoutes from "./routes/auth.routes.js"


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send('API is running...'));

export default app; // Export the app for testing
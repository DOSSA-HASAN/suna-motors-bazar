import express from 'express';
import passport from 'passport';
// Import generateToken here
import { registerUser, loginUser, generateToken } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', passport.authenticate('local', { session: false }), loginUser);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));

router.get('/google/callback',
    passport.authenticate('google', { session: false, failureRedirect: '/login' }),
    (req, res) => {
        const token = generateToken(req.user._id);

        // Set as a cookie instead of a URL param
        res.cookie('token', token, {
            httpOnly: true, // Prevents JS access
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Lax',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        });

        res.redirect(`http://localhost:3000/dashboard`);
    }
);

export default router;
import express from 'express';
import {
    updateProfile,
    changePassword,
    forgotPassword,
    resetPassword,
    changeEmail,
} from '../controllers/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.put('/profile', protect, updateProfile);
router.put('/change-password', protect, changePassword);
router.put('/change-email', protect, changeEmail);

router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

export default router;

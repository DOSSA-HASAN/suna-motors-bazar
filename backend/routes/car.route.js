import express from 'express';
import {
    createCar,
    getCars,
    getCarById,
    updateCar,
    deleteCar
} from '../controllers/car.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import upload from '../config/cloudinary.js';

const router = express.Router();

// Public routes (anyone can see cars)
router.get('/', getCars);
router.get('/:id', getCarById);

// Protected routes (Only logged in admins)
router.post('/', protect, upload.array('images', 5), createCar);
router.patch('/:id', protect, upload.array('images', 5), updateCar);
router.delete('/:id', protect, deleteCar);

export default router;
import express from 'express';
import { seedAdmin } from '../controllers/seedController.js';

const router = express.Router();

router.get('/admin', seedAdmin);

export default router;
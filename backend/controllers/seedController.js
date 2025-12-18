import User from '../models/User.js';
import bcrypt from 'bcryptjs';

/**
 * @desc    Seed Initial Admin User
 * @route   GET /api/seed/admin
 */
export const seedAdmin = async (req, res) => {
    try {
        // Check if admin exists
        const adminExists = await User.findOne({ email: 'admin@suna.com' });

        if (adminExists) {
            return res.status(400).json({ message: 'Admin user already exists' });
        }

        // Hash the initial password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('12345', salt);

        const admin = await User.create({
            name: 'Suna Admin',
            email: 'admin@suna.com',
            password: hashedPassword,
            isAdmin: true,
        });

        res.status(201).json({
            message: 'Admin user seeded successfully',
            user: {
                id: admin._id,
                name: admin.name,
                email: admin.email
            }
        });
    } catch (error) {
        console.log(error.stack)
        console.log(error.message)
        res.status(500).json({ message: error.message });
    }
};
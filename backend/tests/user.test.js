import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import app from '../app.js';

vi.stubEnv('JWT_SECRET', 'test_secret_123');

let mongoServer;
let token;
let resetToken;

describe('User Profile & Password Endpoints', () => {
    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());

        // Register user
        await request(app)
            .post('/api/auth/register')
            .send({
                name: 'Test User',
                email: 'user@test.com',
                password: 'password123',
            });

        // Login user
        const loginRes = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'user@test.com',
                password: 'password123',
            });

        token = loginRes.body.token;
    });

    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    it('should update user profile', async () => {
        const res = await request(app)
            .put('/api/users/profile')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Updated User',
                avatar: 'https://avatar.test/img.png',
            });

        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('Updated User');
        expect(res.body.avatar).toBeDefined();
    });

    it('should change password', async () => {
        const res = await request(app)
            .put('/api/users/change-password')
            .set('Authorization', `Bearer ${token}`)
            .send({
                currentPassword: 'password123',
                newPassword: 'newPassword123',
            });

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Password updated successfully');
    });

    it('should login with new password', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'user@test.com',
                password: 'newPassword123',
            });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
    });

    it('should generate forgot password token', async () => {
        const res = await request(app)
            .post('/api/users/forgot-password')
            .send({ email: 'user@test.com' });

        expect(res.statusCode).toBe(200);
        expect(res.body.resetToken).toBeDefined();

        resetToken = res.body.resetToken;
    });

    it('should reset password using token', async () => {
        const res = await request(app)
            .post('/api/users/reset-password')
            .send({
                token: resetToken,
                newPassword: 'resetPassword123',
            });

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Password reset successful');
    });

    it('should login with reset password', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'user@test.com',
                password: 'resetPassword123',
            });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
    });

    it('should change email', async () => {
        const res = await request(app)
            .put('/api/users/change-email')
            .set('Authorization', `Bearer ${token}`)
            .send({ newEmail: 'newemail@test.com' });

        expect(res.statusCode).toBe(200);
        expect(res.body.email).toBe('newemail@test.com');
    });
});

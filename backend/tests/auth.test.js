import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import app from '../app.js';


// STUB THESE FIRST
vi.stubEnv('JWT_SECRET', 'test_secret_123');
vi.stubEnv('GOOGLE_CLIENT_ID', 'dummy_id');
vi.stubEnv('GOOGLE_CLIENT_SECRET', 'dummy_secret');

let mongoServer;

describe('Auth Endpoints', () => {
    // Setup: Spin up an in-memory database before tests
    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
    });

    // Teardown: Clean up after tests
    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    it('should register a new user successfully', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                name: 'Admin User',
                email: 'admin@test.com',
                password: 'password123'
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('token');
        expect(res.body.email).toBe('admin@test.com');
    });

    it('should not register a user with an existing email', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                name: 'Admin User',
                email: 'admin@test.com',
                password: 'password123'
            });

        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe('User already exists');
    });

    it('should login an existing user', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'admin@test.com',
                password: 'password123'
            });

        console.log(res.error)

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
    });
});
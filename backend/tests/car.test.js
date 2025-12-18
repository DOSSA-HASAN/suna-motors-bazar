import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import app from '../app.js';

vi.stubEnv('JWT_SECRET', 'test_secret_123');

let mongoServer;
let token;
let carId;

describe('Car Endpoints', () => {
    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());

        // Register user
        await request(app)
            .post('/api/auth/register')
            .send({
                name: 'Admin',
                email: 'admin@cars.com',
                password: 'password123',
            });

        // Login user
        const loginRes = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'admin@cars.com',
                password: 'password123',
            });

        token = loginRes.body.token;
    });

    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    it('should create a car', async () => {
        const res = await request(app)
            .post('/api/cars')
            .set('Authorization', `Bearer ${token}`)
            .send({
                brand: 'Toyota',
                model: 'Vitz',
                year: 2018,
                price: 1200000,
                mileage: 60000,
                fuelType: 'Petrol',
                transmission: 'Automatic',
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.brand).toBe('Toyota');

        carId = res.body._id;
    });

    it('should get all cars', async () => {
        const res = await request(app).get('/api/cars');

        expect(res.statusCode).toBe(200);

        // New response structure
        expect(res.body).toHaveProperty('cars');
        expect(Array.isArray(res.body.cars)).toBe(true);

        expect(res.body).toHaveProperty('total');
        expect(res.body).toHaveProperty('page');
        expect(res.body).toHaveProperty('pages');
        expect(res.body).toHaveProperty('count');
    });


    it('should update a car', async () => {
        const res = await request(app)
            .patch(`/api/cars/${carId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({ price: 1300000 });

        expect(res.statusCode).toBe(200);
        expect(res.body.price).toBe(1300000);
    });

    it('should delete a car', async () => {
        const res = await request(app)
            .delete(`/api/cars/${carId}`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Car deleted successfully');
    });
});

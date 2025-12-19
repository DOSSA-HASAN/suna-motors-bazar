import Car from '../models/Car.js';
import { v2 as cloudinary } from 'cloudinary';

/**
 * @desc    Create car
 * @route   POST /api/cars
 */
export const createCar = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        const images = req.files
            ? req.files.map(file => ({
                url: file.path,
                publicId: file.filename, // Cloudinary public_id
            }))
            : [];

        const carData = {
            ...req.body,
            price: Number(req.body.price),
            year: Number(req.body.year),
            mileage: Number(req.body.mileage),
            engineSize: Number(req.body.engineSize), // Add this line
            images,
            createdBy: req.user._id,
        };

        const car = await Car.create(carData);
        res.status(201).json(car);
    } catch (error) {
        console.error('Create Error:', error);
        res.status(400).json({ message: error.message });
    }
};

/**
 * @desc    Update car
 * @route   PUT /api/cars/:id
 */
export const updateCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        // 1️⃣ Handle removed images
        let removedImages = [];
        if (req.body.removedImages) {
            removedImages = Array.isArray(req.body.removedImages)
                ? req.body.removedImages
                : [req.body.removedImages];

            // Delete from Cloudinary
            await Promise.all(
                removedImages.map(publicId =>
                    cloudinary.uploader.destroy(publicId)
                )
            );
        }

        // 2️⃣ Keep images that were NOT removed
        const remainingImages = car.images.filter(
            img => !removedImages.includes(img.publicId)
        );

        // 3️⃣ Add new uploaded images
        const newImages = req.files
            ? req.files.map(file => ({
                url: file.path,
                publicId: file.filename,
            }))
            : [];

        const updatedData = {
            ...req.body,
            images: [...remainingImages, ...newImages],
        };

        // 4️⃣ Cast numeric fields
        if (req.body.price) updatedData.price = Number(req.body.price);
        if (req.body.year) updatedData.year = Number(req.body.year);
        if (req.body.mileage) updatedData.mileage = Number(req.body.mileage);
        if (req.body.engineSize) updatedData.engineSize = Number(req.body.engineSize);

        const updatedCar = await Car.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true, runValidators: true }
        );

        res.json(updatedCar);
    } catch (error) {
        console.error('Update Error:', error);
        res.status(400).json({ message: error.message });
    }
};


/**
 * @desc    Delete car
 * @route   DELETE /api/cars/:id
 */
export const deleteCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        if (car.images && car.images.length > 0) {
            await Promise.all(
                car.images.map(image =>
                    cloudinary.uploader.destroy(image.publicId)
                )
            );
        }

        await car.deleteOne();
        res.json({ message: 'Car deleted successfully' });
    } catch (error) {
        console.error('Delete Error:', error);
        res.status(500).json({ message: error.message });
    }
};

/**
 * @desc    Get all cars with filtering, sorting & pagination
 * @route   GET /api/cars
 */
export const getCars = async (req, res) => {
    try {
        const {
            brand,
            model,
            fuelType,
            transmission,
            minPrice,
            maxPrice,
            minYear,
            maxYear,
            minMileage,
            maxMileage,
            minCC,
            maxCC,
            isAvailable,
            search,
            sortBy = 'createdAt',
            order = 'desc',
            page = 1,
            limit = 12,
        } = req.query;

        const filter = {};

        // Exact matches
        if (brand) filter.brand = brand;
        if (model) filter.model = model;
        if (fuelType) filter.fuelType = fuelType;
        if (transmission) filter.transmission = transmission;
        if (isAvailable !== undefined)
            filter.isAvailable = isAvailable === 'true';

        // Ranges
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }

        if (minYear || maxYear) {
            filter.year = {};
            if (minYear) filter.year.$gte = Number(minYear);
            if (maxYear) filter.year.$lte = Number(maxYear);
        }

        if (minMileage || maxMileage) {
            filter.mileage = {};
            if (minMileage) filter.mileage.$gte = Number(minMileage);
            if (maxMileage) filter.mileage.$lte = Number(maxMileage);
        }

        if (minCC || maxCC) {
            filter.engineSize = {};
            if (minCC) filter.engineSize.$gte = Number(minCC);
            if (maxCC) filter.engineSize.$lte = Number(maxCC);
        }

        // Text search (brand + model)
        if (search) {
            filter.$or = [
                { brand: { $regex: search, $options: 'i' } },
                { model: { $regex: search, $options: 'i' } },
            ];
        }

        // Pagination
        const skip = (Number(page) - 1) * Number(limit);

        // Sorting
        const sort = { [sortBy]: order === 'asc' ? 1 : -1 };

        const [cars, total] = await Promise.all([
            Car.find(filter)
                .populate('createdBy', 'name email')
                .sort(sort)
                .skip(skip)
                .limit(Number(limit)),
            Car.countDocuments(filter),
        ]);

        res.json({
            total,
            page: Number(page),
            pages: Math.ceil(total / limit),
            count: cars.length,
            cars,
        });
    } catch (error) {
        console.error('Get Cars Error:', error);
        res.status(500).json({ message: error.message });
    }
};


/**
 * @desc    Get single car
 * @route   GET /api/cars/:id
 */
export const getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    } catch {
        res.status(400).json({ message: 'Invalid Car ID' });
    }
};

import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
    {
        brand: { type: String, required: true },
        model: { type: String, required: true },
        year: { type: Number, required: true },
        price: { type: Number, required: true },
        mileage: { type: Number },
        engineSize: { type: Number },
        fuelType: {
            type: String,
            enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
            required: true,
        },
        transmission: {
            type: String,
            enum: ['Manual', 'Automatic'],
            required: true,
        },
        description: { type: String },
        images: [
            {
                url: { type: String, required: true },
                publicId: { type: String, required: true },
            },
        ],
        isAvailable: { type: Boolean, default: true },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    { timestamps: true }
);

const Car = mongoose.model('Car', carSchema);
export default Car;

import axiosInstance from './axiosInstance';

export const carService = {
    // Fetch cars with query params (brand, model, page, etc.)
    getAll: async (params) => {
        const { data } = await axiosInstance.get('/cars', { params });
        return data;
    },

    getById: async (id) => {
        const { data } = await axiosInstance.get(`/cars/${id}`);
        return data;
    },

    // Use FormData for file uploads (req.files)
    create: async (formData) => {
        const { data } = await axiosInstance.post('/cars', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return data;
    },

    update: async (id, formData) => {
        const { data } = await axiosInstance.patch(`/cars/${id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return data;
    },

    delete: async (id) => {
        const { data } = await axiosInstance.delete(`/cars/${id}`);
        return data;
    }
};
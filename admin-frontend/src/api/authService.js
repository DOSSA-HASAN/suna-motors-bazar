import axiosInstance from './axiosInstance';

export const loginAdmin = async (credentials) => {
    const { data } = await axiosInstance.post('/auth/login', credentials);
    return data;
};
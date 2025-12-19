import axiosInstance from './axiosInstance'; // Adjust path to where your file is

export const userService = {
    updateProfile: (data) => axiosInstance.put('/users/profile', data),
    changePassword: (data) => axiosInstance.put('/users/change-password', data),
    changeEmail: (data) => axiosInstance.put('/users/change-email', data),
    forgotPassword: (email) => axiosInstance.post('/users/forgot-password', { email }),
    resetPassword: (data) => axiosInstance.post('/users/reset-password', data),
};
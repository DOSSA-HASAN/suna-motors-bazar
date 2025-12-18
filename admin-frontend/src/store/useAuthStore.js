import { create } from 'zustand';

// Helper to safely get user from localStorage
const getInitialUser = () => {
    const user = localStorage.getItem('user');
    if (!user || user === "undefined") return null;
    try {
        return JSON.parse(user);
    } catch (e) {
        return null;
    }
};

export const useAuthStore = create((set) => ({
    user: getInitialUser(),
    token: localStorage.getItem('token') || null,

    setAuth: (user, token) => {
        // Only save if data exists to avoid saving "undefined"
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            set({ user, token });
        }
    },

    logout: () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        set({ user: null, token: null });
        // Optional: Force a redirect to login
        window.location.href = '/login';
    }
}));
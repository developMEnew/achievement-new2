import { create } from 'zustand';

interface AuthState {
  user: null | { id: string; email: string; name: string; photoURL: string };
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async () => {
    // Simulated Google login
    const mockUser = {
      id: '1',
      email: 'user@example.com',
      name: 'John Doe',
      photoURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: async () => {
    set({ user: null, isAuthenticated: false });
  },
}));
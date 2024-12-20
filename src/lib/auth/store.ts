import { create } from 'zustand';
import { AuthState } from './types';
import { mockLogin, mockLogout } from './utils';

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async () => {
    const user = await mockLogin();
    set({ user, isAuthenticated: true });
  },
  logout: async () => {
    await mockLogout();
    set({ user: null, isAuthenticated: false });
  },
}));
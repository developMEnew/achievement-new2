export interface User {
  id: string;
  email: string;
  name: string;
  photoURL: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}
import { User } from './types';

export async function mockLogin(): Promise<User> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    photoURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  };
}

export async function mockLogout(): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 500));
}
// Firebase Authentication utilities
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User,
  UserCredential
} from 'firebase/auth';
import { auth } from './config';

export interface SignUpData {
  email: string;
  password: string;
  displayName?: string;
}

export interface SignInData {
  email: string;
  password: string;
}

// Sign up a new user
export const signUp = async (data: SignUpData): Promise<UserCredential> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

  // Update profile if displayName is provided
  if (data.displayName && userCredential.user) {
    await updateProfile(userCredential.user, {
      displayName: data.displayName
    });
  }

  return userCredential;
};

// Sign in an existing user
export const signIn = async (data: SignInData): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(auth, data.email, data.password);
};

// Sign out the current user
export const logout = async (): Promise<void> => {
  await signOut(auth);
};

// Send password reset email
export const resetPassword = async (email: string): Promise<void> => {
  await sendPasswordResetEmail(auth, email);
};

// Get current user
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};


// Firebase Storage utilities
import { 
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  listAll,
  getMetadata,
  UploadResult,
  UploadTask
} from 'firebase/storage';
import { storage } from './config';

// Upload a file to Firebase Storage
export const uploadFile = async (
  path: string,
  file: File,
  metadata?: { contentType?: string; customMetadata?: Record<string, string> }
): Promise<UploadResult> => {
  const storageRef = ref(storage, path);
  return await uploadBytes(storageRef, file, metadata);
};

// Upload a file with progress tracking
export const uploadFileWithProgress = (
  path: string,
  file: File,
  metadata?: { contentType?: string; customMetadata?: Record<string, string> }
): UploadTask => {
  const storageRef = ref(storage, path);
  return uploadBytesResumable(storageRef, file, metadata);
};

// Get download URL for a file
export const getFileURL = async (path: string): Promise<string> => {
  const storageRef = ref(storage, path);
  return await getDownloadURL(storageRef);
};

// Delete a file from Firebase Storage
export const deleteFile = async (path: string): Promise<void> => {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
};

// List all files in a folder
export const listFiles = async (path: string) => {
  const storageRef = ref(storage, path);
  return await listAll(storageRef);
};

// Get file metadata
export const getFileMetadata = async (path: string) => {
  const storageRef = ref(storage, path);
  return await getMetadata(storageRef);
};


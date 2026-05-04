// Firestore utilities
import { 
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  Timestamp,
  DocumentData,
  QueryConstraint
} from 'firebase/firestore';
import { db } from './config';

// Generic function to get a single document
export const getDocument = async <T = DocumentData>(
  collectionName: string,
  documentId: string
): Promise<T | null> => {
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as T;
  }
  return null;
};

// Generic function to get all documents from a collection
export const getDocuments = async <T = DocumentData>(
  collectionName: string,
  constraints?: QueryConstraint[]
): Promise<T[]> => {
  const collectionRef = collection(db, collectionName);
  const q = constraints 
    ? query(collectionRef, ...constraints)
    : query(collectionRef);
  
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as T[];
};

// Generic function to create a document
export const createDocument = async <T = DocumentData>(
  collectionName: string,
  data: Omit<T, 'id'> & { createdAt?: Timestamp }
): Promise<string> => {
  const collectionRef = collection(db, collectionName);
  const docData = {
    ...data,
    createdAt: data.createdAt || Timestamp.now(),
    updatedAt: Timestamp.now()
  };
  const docRef = await addDoc(collectionRef, docData);
  return docRef.id;
};

// Generic function to update a document
export const updateDocument = async <T = DocumentData>(
  collectionName: string,
  documentId: string,
  data: Partial<T>
): Promise<void> => {
  const docRef = doc(db, collectionName, documentId);
  await updateDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now()
  });
};

// Generic function to delete a document
export const deleteDocument = async (
  collectionName: string,
  documentId: string
): Promise<void> => {
  const docRef = doc(db, collectionName, documentId);
  await deleteDoc(docRef);
};

// Generic function to set a document (create or overwrite)
export const setDocument = async <T = DocumentData>(
  collectionName: string,
  documentId: string,
  data: Omit<T, 'id'>
): Promise<void> => {
  const docRef = doc(db, collectionName, documentId);
  await setDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now()
  });
};

// Export Firestore utilities
export { where, orderBy, limit, Timestamp };


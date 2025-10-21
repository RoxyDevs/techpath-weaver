'use client';

import { useEffect } from 'react';
import { useAuth, useFirebase, useUser as useFirebaseUser } from '@/firebase/provider';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { User } from 'firebase/auth';

/**
 * Hook specifically for accessing the authenticated user's state
 * and persisting their data to Firestore.
 */
export const useUser = () => {
  const { user, ...rest } = useFirebaseUser();
  const { firestore } = useFirebase();
  const auth = useAuth();

  useEffect(() => {
    if (user && firestore) {
      // When a user signs in, create a document for them in Firestore
      // if it doesn't already exist.
      const userRef = doc(firestore, 'users', user.uid);
      setDoc(userRef, {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        authId: user.uid,
        role: 'usuaria', // Default role
        lastLogin: serverTimestamp(),
      }, { merge: true });
    }
  }, [user, firestore, auth]);

  return { user, ...rest };
};

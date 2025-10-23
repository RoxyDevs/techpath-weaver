'use client';

import { useEffect } from 'react';
import { useAuth, useFirebase, useUser as useFirebaseUser } from '@/firebase/provider';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

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
      const userProfileData = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        authId: user.uid,
        role: user.email === 'roxdev2023@gmail.com' ? 'admin' : 'usuaria',
        lastLogin: serverTimestamp(),
      };

      const userRef = doc(firestore, 'users', user.uid);
      
      // Use non-blocking write with contextual error handling
      setDoc(userRef, userProfileData, { merge: true })
        .catch((error) => {
            const permissionError = new FirestorePermissionError({
              path: userRef.path,
              operation: 'write', // Using 'write' for set with merge:true
              requestResourceData: userProfileData,
            });
            // Emit the detailed error for the global listener to catch
            errorEmitter.emit('permission-error', permissionError);
        });
    }
  }, [user, firestore, auth]);

  return { user, ...rest };
};

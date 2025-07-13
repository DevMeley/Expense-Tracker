import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [idToken, setIdToken] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setIdToken(token);
       
        setUser(user);
      } else {
        setUser(null);
        setIdToken(null);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);


  return (
    <AuthContext.Provider value={{user, idToken, isLoading}}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
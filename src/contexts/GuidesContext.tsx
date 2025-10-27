
'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type GuidesContextType = {
  showGuides: boolean;
  toggleGuides: () => void;
};

const GuidesContext = createContext<GuidesContextType | undefined>(undefined);

export function GuidesProvider({ children }: { children: ReactNode }) {
  const [showGuides, setShowGuides] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem('showGuides');
    if (storedPreference !== null) {
      setShowGuides(JSON.parse(storedPreference));
    }
  }, []);

  const toggleGuides = () => {
    const newShowGuides = !showGuides;
    setShowGuides(newShowGuides);
    localStorage.setItem('showGuides', JSON.stringify(newShowGuides));
  };

  return (
    <GuidesContext.Provider value={{ showGuides, toggleGuides }}>
      {children}
    </GuidesContext.Provider>
  );
}

export function useGuides() {
  const context = useContext(GuidesContext);
  if (context === undefined) {
    throw new Error('useGuides must be used within a GuidesProvider');
  }
  return context;
}

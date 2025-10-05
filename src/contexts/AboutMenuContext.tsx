"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AboutMenuContextType {
  showAboutMenu: boolean;
  setShowAboutMenu: (show: boolean) => void;
  toggleAboutMenu: () => void;
}

const AboutMenuContext = createContext<AboutMenuContextType | undefined>(undefined);

interface AboutMenuProviderProps {
  children: ReactNode;
}

export const AboutMenuProvider: React.FC<AboutMenuProviderProps> = ({ children }) => {
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const toggleAboutMenu = () => {
    setShowAboutMenu(prev => !prev);
  };

  const value: AboutMenuContextType = {
    showAboutMenu,
    setShowAboutMenu,
    toggleAboutMenu,
  };

  return (
    <AboutMenuContext.Provider value={value}>
      {children}
    </AboutMenuContext.Provider>
  );
};

export const useAboutMenu = (): AboutMenuContextType => {
  const context = useContext(AboutMenuContext);
  if (context === undefined) {
    throw new Error('useAboutMenu must be used within an AboutMenuProvider');
  }
  return context;
};

"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AboutMenuContextType {
  showAboutMenu: boolean;
  setShowAboutMenu: (show: boolean) => void;
  toggleAboutMenu: () => void;
  handleActiveSlug: (slug: string) => void;
  activeSlug: string;
}

const AboutMenuContext = createContext<AboutMenuContextType | undefined>(undefined);

interface AboutMenuProviderProps {
  children: ReactNode;
}

export const AboutMenuProvider: React.FC<AboutMenuProviderProps> = ({ children }) => {
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [activeSlug, setActiveSlug] = useState("");

  const toggleAboutMenu = () => {
    setShowAboutMenu(prev => !prev);
  };

  const handleActiveSlug = (slug: string) => {
    setActiveSlug(slug);
  };

  const value: AboutMenuContextType = {
    showAboutMenu,
    activeSlug,
    setShowAboutMenu,
    toggleAboutMenu,
    handleActiveSlug,
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
    // Return default values during SSR/prerendering instead of throwing
    // This allows pages to be statically generated
    return {
      showAboutMenu: false,
      setShowAboutMenu: () => {},
      toggleAboutMenu: () => {},
      handleActiveSlug: () => {},
      activeSlug: "",
    };
  }
  return context;
};

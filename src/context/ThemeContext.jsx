import React, { createContext, useContext } from 'react';

// itialize the universal animation tracking context
const ThemeContext = createContext();

// setup a clean custom hook to securely ping themecontext from any component
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Snappy viewport config 
  const viewportConfig = { once: true, margin: "-80px", amount: 0.2 };

  // Snappy transition 
  const snappyTransition = { duration: 0.5, ease: "easeOut" };

  // Variant for upward motion
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: snappyTransition }
  };

  // Variant for image scale reveal
  const imageRevealVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Stagger wrapper for cards
  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  // Specific service card variant
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: snappyTransition }
  };

  return (
    <ThemeContext.Provider value={{
      viewportConfig,
      fadeUpVariants,
      imageRevealVariants,
      cardVariants,
      staggerContainer
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

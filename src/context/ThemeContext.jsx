import React, { createContext, useContext } from 'react';

// itialize the universal animation tracking context
const ThemeContext = createContext();

// setup a clean custom hook to securely ping themecontext from any component
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // global viewport settings determining when components natively spawn into view 
  const viewportConfig = { once: true, margin: "-100px", amount: 0.1 };

  // standard smooth fading-up element
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
  };

  // sliding elements natively flowing from the left horizontally
  const fadeLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
  };

  // sliding elements natively flowing from the right horizontally
  const fadeRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
  };

  // complex container that sequentially launches its nested component nodes one-by-one
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // heavy dynamic popping/scaling elements 
  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <ThemeContext.Provider value={{
      viewportConfig,
      fadeUpVariants,
      fadeLeftVariants,
      fadeRightVariants,
      staggerContainer,
      scaleUpVariants
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

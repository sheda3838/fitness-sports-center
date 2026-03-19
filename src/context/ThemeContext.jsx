import React, { createContext, useContext } from 'react';

// itialize the universal animation tracking context
const ThemeContext = createContext();

// setup a clean custom hook to securely ping themecontext from any component
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // global viewport settings for professional entrance triggering
  const viewportConfig = { once: true, margin: "-120px", amount: 0.15 };

  // professional high-end easing: snappier start, buttery smooth landing
  const smoothTransitions = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  // soft fade-up from below (most professional choice)
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: smoothTransitions }
  };

  // very subtle side reveals (reduced movement for a premium feel)
  const fadeLeftVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: smoothTransitions }
  };

  const fadeRightVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: smoothTransitions }
  };

  // staggered container for cascading entrance of child elements
  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // refined soft scale entrance
  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: smoothTransitions }
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

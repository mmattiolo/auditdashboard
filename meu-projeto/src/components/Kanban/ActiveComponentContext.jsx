import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const ActiveComponentContext = createContext();

export const useActiveComponent = () => useContext(ActiveComponentContext);

export const ActiveComponentProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  return (
    <ActiveComponentContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </ActiveComponentContext.Provider>
  );
};

// Adicionando PropTypes
ActiveComponentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import PropTypes from "prop-types";
import React, { useContext, useState } from "react";

const ModalContext = React.createContext();

export const useModalContext = () => {
  return useContext(ModalContext);
};

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.any,
};

export default ModalProvider;

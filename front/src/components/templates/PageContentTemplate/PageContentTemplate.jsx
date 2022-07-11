import Modal from "components/organisms/LoginForm/Modal";
import { useModalContext } from "contexts/ModalContext";
import React from "react";
import PageContentTemplateStyle from "./PageContentTemplate.style";

const PageContentTemplate = ({ children }) => {
  const { isOpen, setIsOpen } = useModalContext();

  if (isOpen) {
    return <Modal open={isOpen} onClose={() => setIsOpen(false)} />;
  }
  return <PageContentTemplateStyle>{children}</PageContentTemplateStyle>;
};

export default PageContentTemplate;

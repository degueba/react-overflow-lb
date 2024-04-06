import React, { Dispatch, SetStateAction, useCallback, useState } from "react";

type ModalContent = (JSX.Element | string) | null;
type Size = "sm" | "md" | "lg";

interface ModalContextProps {
  isModalActive: boolean;
  toggleModal: () => void;
  modalContent: ModalContent;
  setModalContent: Dispatch<SetStateAction<any>> | void;
  size: Size;
  setSize: Dispatch<SetStateAction<any>> | void;
}

export const ModalContext = React.createContext<ModalContextProps>({
  isModalActive: false,
  toggleModal: () => null,
  modalContent: null,
  setModalContent: () => null,
  size: "sm",
  setSize: () => null,
});

export const ModalContextProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>(null);
  const [size, setSize] = useState<Size>("lg");

  const toggleModal = useCallback(() => {
    setIsModalActive(!isModalActive);
  }, [isModalActive]);

  const changeModalContent = (content: JSX.Element | string) => {
    setModalContent(content);
    toggleModal();
  };

  return (
    <ModalContext.Provider
      value={{
        isModalActive,
        toggleModal,
        modalContent,
        setModalContent: changeModalContent,
        size,
        setSize,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

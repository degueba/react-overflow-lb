import React, { useContext, useEffect } from "react";

import { ModalContext } from "../context/ModalContext";

const Modal = ({ width = "", className = "" }) => {
  const { isModalActive, toggleModal, size, modalContent } =
    useContext<any>(ModalContext);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (isModalActive) body.classList.add("no-scroll");
    else body.classList.remove("no-scroll");
  }, [isModalActive]);

  return (
    <div
      className={`modal ${className || ""} ${size ? `size-${size}` : ""} ${
        isModalActive ? "is-active" : ""
      }`}
    >
      <div className="modal__overlay" onClick={toggleModal}></div>
      <div className={`modal__content`} style={{ width }}>
        {modalContent}
      </div>
    </div>
  );
};

export default Modal;

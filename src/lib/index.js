import {
  ModalBackdrop,
  ModalContainer,
  ModalCloseButton,
  ModalTextButton,
} from "./Style";
import React, { useEffect } from "react";

function Modal({
  showClose = true,
  escapeClose = true,
  clickClose = true,
  closeText = false,
  animation = false,
  blockScrolling = true,
  modalCloseButtonStyle = "",
  modalTextButtonStyle = "",
  modalContainerStyle = "",
  modalBackdropStyle = "",
  show,
  toggle,
  children,
}) {
  const modalCloseButton = React.useRef(null);
  useEffect(() => {
    if (show) {
      modalCloseButton.current.focus();
      if (blockScrolling) block();
    }
  });

  const block = () => {
    document.body.style.overflow = "hidden";
  };

  const unblock = () => {
    document.body.style.overflow = "visible";
  };

  const close = (e) => {
    e.preventDefault();
    if (clickClose && e.type === "click") {
      toggle();
    }
    if (
      e.type === "keydown" &&
      (e.key === "Enter" || (escapeClose && e.key === "Escape"))
    ) {
      console.log(e);
      toggle();
    }
    unblock();
  };
  return (
    <ModalBackdrop
      show={show}
      onClick={close}
      onKeyDown={close}
      customStyle={modalBackdropStyle}
    >
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        closeText={closeText}
        animation={animation}
        customStyle={modalContainerStyle}
      >
        {children}
        <ModalTextButton
          closeText={closeText}
          onClick={
            closeText.eventHandling
              ? () => {
                  if (blockScrolling) unblock();
                  closeText.eventHandling();
                }
              : close
          }
          customStyle={modalTextButtonStyle}
        >
          {closeText.text}
        </ModalTextButton>
        <ModalCloseButton
          ref={modalCloseButton}
          onClick={close}
          onKeyDown={close}
          showClose={showClose}
          tabIndex='-1'
          customStyle={modalCloseButtonStyle}
        >
          <span
            style={{
              height: "100%",
            }}
          >
            +
          </span>
        </ModalCloseButton>
      </ModalContainer>
    </ModalBackdrop>
  );
}
export default Modal;

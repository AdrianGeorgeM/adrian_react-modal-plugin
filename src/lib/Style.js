import styled, { keyframes, css } from "styled-components";

export const ModalBackdrop = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(51, 66, 87, 0.5);
  ${(props) =>
    css`
      ${props.customStyle}
    `}
`;

const fadeIn = keyframes`
  0% {
    opacity: 0.3;
    transform: translate(-50%, -65%)};
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: auto;
  width: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: ${(props) => (props.closeText ? "space-between" : "center")};
  align-items: center;
  user-select: none;
  opacity: 1;
  ${(props) =>
    props.animation
      ? css`
          animation: ${fadeIn} ease-out 0.4s 1 forwards;
        `
      : ``}
  ${(props) =>
    css`
      ${props.customStyle}
    `}
`;

export const ModalCloseButton = styled.div`
  display: ${(props) => (props.showClose ? "flex" : "none")};
  width: 36px;
  height: 36px;
  background-color: rgb(84, 140, 168);
  border-radius: 18px;
  position: fixed;
  top: -18px;
  right: -18px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 25px;
  transform: rotate(45deg);
  ${(props) =>
    css`
      ${props.customStyle}
    `}
`;

export const ModalTextButton = styled.button`
  display: ${(props) => (props.closeText ? "block" : "none")};
  flex-basis: 100%;
  background-color: rgb(84, 140, 168);
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 18px;
  margin-top: 18px;
  ${(props) =>
    css`
      ${props.customStyle}
    `};
`;

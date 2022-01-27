"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Style = require("./Style");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Modal(_ref) {
  let {
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
    children
  } = _ref;

  const modalCloseButton = _react.default.useRef(null);

  (0, _react.useEffect)(() => {
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

  const close = e => {
    e.preventDefault();

    if (clickClose && e.type === "click") {
      toggle();
    }

    if (e.type === "keydown" && (e.key === "Enter" || escapeClose && e.key === "Escape")) {
      console.log(e);
      toggle();
    }

    unblock();
  };

  return /*#__PURE__*/_react.default.createElement(_Style.ModalBackdrop, {
    show: show,
    onClick: close,
    onKeyDown: close,
    customStyle: modalBackdropStyle
  }, /*#__PURE__*/_react.default.createElement(_Style.ModalContainer, {
    onClick: e => {
      e.stopPropagation();
    },
    closeText: closeText,
    animation: animation,
    customStyle: modalContainerStyle
  }, children, /*#__PURE__*/_react.default.createElement(_Style.ModalTextButton, {
    closeText: closeText,
    onClick: closeText.eventHandling ? () => {
      if (blockScrolling) unblock();
      closeText.eventHandling();
    } : close,
    customStyle: modalTextButtonStyle
  }, closeText.text), /*#__PURE__*/_react.default.createElement(_Style.ModalCloseButton, {
    ref: modalCloseButton,
    onClick: close,
    onKeyDown: close,
    showClose: showClose,
    tabIndex: "-1",
    customStyle: modalCloseButtonStyle
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      height: "100%"
    }
  }, "+"))));
}

var _default = Modal;
exports.default = _default;
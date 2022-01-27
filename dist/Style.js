"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalTextButton = exports.ModalContainer = exports.ModalCloseButton = exports.ModalBackdrop = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const ModalBackdrop = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: ", ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(51, 66, 87, 0.5);\n  ", "\n"])), props => props.show ? "block" : "none", props => (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", "\n    "])), props.customStyle));

exports.ModalBackdrop = ModalBackdrop;
const fadeIn = (0, _styledComponents.keyframes)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0.3;\n    transform: translate(-50%, -65%)};\n  to {\n    transform: translate(-50%, -50%);\n    opacity: 1;\n  }\n"])));

const ModalContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  height: auto;\n  width: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: ", ";\n  align-items: center;\n  user-select: none;\n  opacity: 1;\n  ", "\n  ", "\n"])), props => props.closeText ? "space-between" : "center", props => props.animation ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          animation: ", " ease-out 0.4s 1 forwards;\n        "])), fadeIn) : "", props => (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      ", "\n    "])), props.customStyle));

exports.ModalContainer = ModalContainer;

const ModalCloseButton = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: ", ";\n  width: 36px;\n  height: 36px;\n  background-color: rgb(84, 140, 168);\n  border-radius: 18px;\n  position: fixed;\n  top: -18px;\n  right: -18px;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 25px;\n  transform: rotate(45deg);\n  ", "\n"])), props => props.showClose ? "flex" : "none", props => (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      ", "\n    "])), props.customStyle));

exports.ModalCloseButton = ModalCloseButton;

const ModalTextButton = _styledComponents.default.button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: ", ";\n  flex-basis: 100%;\n  background-color: rgb(84, 140, 168);\n  color: white;\n  font-size: 15px;\n  border: none;\n  border-radius: 15px;\n  padding: 10px 15px;\n  cursor: pointer;\n  margin-bottom: 18px;\n  margin-top: 18px;\n  ", ";\n"])), props => props.closeText ? "block" : "none", props => (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      ", "\n    "])), props.customStyle));

exports.ModalTextButton = ModalTextButton;
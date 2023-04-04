import { templateErrorLoad, templateErrorClass } from './elementsSettings.js';
import { util } from './util.js';
import { mainElements } from './elementsSettings.js';
import { evtHandler } from './handlerEvt.js';

const
  body = mainElements.body,
  templateError = templateErrorLoad.template;

let
  messageElement = {},
  container = {},
  wrap = {};


const eraseMessage = () => {
  // console.log('+');
  evtHandler.removeListener(
    container,
    'click',
    eraseMessage,
  );
  body.removeChild(wrap);
  util.closeModal('', body);
};

const renderMessage = (newElement) => {
  body.appendChild(newElement);
  util.openModal('', body);
  // console.log(util.getElement('.error__inner'));
  // evtHandler.onClick(mainElements.main, eraseMessage,templateErrorClass.templateErrorContentClass);
  // util.getElement('.error__inner').addEventListener('click', () => {
  //   eraseMessage(util.getElement('.error'));
  // })
  container = util.getElement(templateErrorClass.templateErrorContainer);
  wrap = util.getElement(templateErrorClass.templateClassWrap);
  evtHandler.onClickLocal(
    container,
    eraseMessage
  );
}


const generateErrorLoad = () => {
  messageElement = templateError.cloneNode(true);
  renderMessage(messageElement);
};


// mainElements.main.addEventListener('click', () => { eraseMessage(util.getElement(templateErrorClass.templateErrorContentClass)) })
// evtHandler.onClick(
//   mainElements.main,
//   eraseMessage(
//     util.getElement('.error__inner')
//   ),
//   '.error__button'
// );
export { generateErrorLoad };

import {
  templateErrorLoad,
  templateErrorClass,
  templateUpload,
  templateUploadClass,
  templateSuccess,
  templateSuccessClass
} from './elementsSettings.js';
import { util } from './util.js';
import { mainElements } from './elementsSettings.js';
import { evtHandler } from './handlerEvt.js';

const
  body = mainElements.body,
  templateError = templateErrorLoad.template,
  templateUploading = templateUpload,
  templateSuccession = templateSuccess,
  messagesClassArr = [templateErrorClass.templateWrap, templateSuccessClass.templateWrap, templateUploadClass.templateWrap];

const getOpenMessage = () => {
  const classOpenMessage = messagesClassArr.find((messageClass) => (document.querySelector(messageClass)));
  return util.getElement(classOpenMessage, body);
};


const eraseMessage = (wrapTemplate = null, containerTemplate = null) => function erasingMessage() {
  if (!wrapTemplate) {
    wrapTemplate = getOpenMessage();
  }
  if (containerTemplate) {
    evtHandler.removeListener(
      containerTemplate,
      'click',
      eraseMessage,
    );
  }
  if (wrapTemplate) {
    body.removeChild(wrapTemplate);
    util.closeModal('', body);
    wrapTemplate = null;
  }
};


const renderMessage = (newElement, templateClass) => {
  body.appendChild(newElement);
  util.openModal('', body);

  const
    containerTemplate = util.getElement(templateClass.templateContainer),
    wrapTemplate = util.getElement(templateClass.templateWrap);
  if (containerTemplate) {
    evtHandler.onClickLocal(
      containerTemplate,
      eraseMessage(wrapTemplate, containerTemplate,)
    );

  }

};


const generateMessage = (template, templateClass) => {
  const messageElement = template.cloneNode(true);
  renderMessage(messageElement, templateClass);
};


const
  generateErrorLoadMessage = () => {
    generateMessage(templateError, templateErrorClass);
  },

  generateUploadMessage = () => {
    generateMessage(templateUploading, templateUploadClass);
    eraseMessage(util.getElement(templateUploadClass.templateWrap));
  },

  getUploadElementMessage = () => util.getElement(templateUploadClass.templateWrap),

  generateSuccessMessage = () => {
    generateMessage(templateSuccession, templateSuccessClass);
  };

evtHandler.onKeydown(document, util.isEscape, eraseMessage());

export {
  generateErrorLoadMessage,
  generateUploadMessage,
  eraseMessage,
  getUploadElementMessage,
  generateSuccessMessage
};

import { templateErrorLoad, templateErrorClass, templateUpload, templateUploadClass, templateSuccess, templateSuccessClass } from './elementsSettings.js';
import { util } from './util.js';
import { mainElements } from './elementsSettings.js';
import { evtHandler } from './handlerEvt.js';

const
  body = mainElements.body,
  templateError = templateErrorLoad.template,
  templateUploading = templateUpload,
  templateSuccession = templateSuccess;


const eraseMessage = (wrapTemplate, containerTemplate = null) => function erasingMessage() {
  if (containerTemplate) {
    evtHandler.removeListener(
      containerTemplate,
      'click',
      eraseMessage,
    );
  }
  // console.log('work')
  // debugger
  // body.removeChild(body.childNodes[30] );
  body.removeChild(wrapTemplate);
  util.closeModal('', body);
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
    // console.log(wrapTemplate)
    // console.log(containerTemplate)
    evtHandler.onKeydown(document, util.isEscape, eraseMessage(wrapTemplate));
    // console.log(wrapTemplate)
    // containerTemplate.addEventListener('keydown', (evt) => {
    //   console.log(evt)
    //   evt.stopPropagation();
    //   if (evt.key === 'esc') {
    //     // console.log(evt.key)
    //     eraseMessage(wrapTemplate,containerTemplate);
    //   }
    // });
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


export {
  generateErrorLoadMessage,
  generateUploadMessage,
  eraseMessage,
  getUploadElementMessage,
  generateSuccessMessage
};

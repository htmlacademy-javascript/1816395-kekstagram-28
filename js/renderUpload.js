import { util } from './util.js';
import { mainElements, modalForm , formElement} from './elementsSettings.js';
import { evtHandler } from './handlerEvt.js';
import { resetScale } from './handlerScale.js';
import { handlerFormEffects } from './handlerFormEffects.js';


const
  uploadFile = formElement.uploadFile,
  imagePreview = formElement.imagePreview,
  previewBtnCancel = formElement.previewBtnCancel;


const getImageContent = (uploadedImage) => {
  imagePreview.src = window.URL.createObjectURL(uploadedImage);
};


const openModalForm = () => {
  getImageContent(uploadFile.files[0]);
  handlerFormEffects.generatePreviewEffects(uploadFile.files[0]);
  util.openModal(modalForm, mainElements.body);
};

const closeModalForm = () => {
  util.closeModal(modalForm, mainElements.body);
  resetScale();
  imagePreview.src = '';
};

evtHandler.onChange(mainElements.main, openModalForm);
evtHandler.onClick(previewBtnCancel, closeModalForm);
evtHandler.onKeydown(previewBtnCancel, util.isEnter, closeModalForm);
evtHandler.onKeydown(document, util.isEscape, closeModalForm);

export { imagePreview, modalForm };

import { util } from './util.js';
import { formElementClass, mainElements } from './elementsSettings.js';
import { evtHandler } from './handlerEvt.js';
import { resetScale } from './handlerScale.js';

const hashtag = /^#[a-zа-я0-9]{1,19}$/i;
const uploadFile = util.getElement(formElementClass.uploadImageClass),
  modalForm = util.getElement(formElementClass.uploadImageEditClass),
  imagePreview = util.getElement('img', util.getElement(formElementClass.imagePreviewWrapClass)),
  previewBtnCancel = util.getElement(formElementClass.uploadImageCancelBTNClass, modalForm),
  effectsPreview = util.getElements('span', modalForm);

const testImageContent = (uploadedImage) => {
  imagePreview.src = window.URL.createObjectURL(uploadedImage);
};

const generatePreviewEffects = (uploadedImage) => {
  effectsPreview.forEach((effectPreview) => {
    effectPreview.style.cssText =
      `background-image : url(${window.URL.createObjectURL(uploadedImage)})`;
    // console.log(effectPreview.style);
  });
};

const openModalForm = () => {
  testImageContent(uploadFile.files[0]);
  generatePreviewEffects(uploadFile.files[0]);
  util.openModal(modalForm, mainElements.body);
};

const closeModalForm = () => {
  util.closeModal(modalForm, mainElements.body);
  resetScale();
};

evtHandler.onChange(mainElements.main, openModalForm);
evtHandler.onClick(previewBtnCancel, closeModalForm);
evtHandler.onKeydown(previewBtnCancel, util.isEnter, closeModalForm);
evtHandler.onKeydown(document, util.isEscape, closeModalForm);

export {imagePreview, modalForm};
// uploadFile.addEventListener('change', (evt) => {
//   if (evt.target.value !== '') {
//     .classList.remove('hidden');
//     imagePreview.src = window.URL.createObjectURL(uploadFile.files[0]);
//     // uploadFile.files[0];
//     // console.log()
//   }
// });

// formEditPicture.classList.remove('hidden');

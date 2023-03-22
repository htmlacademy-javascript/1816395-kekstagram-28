import { evtHandler } from './handlerEvt.js';
import { util } from './util.js';
import { scaleElements, formElementClass } from './elementsSettings.js';
import { imagePreview } from './renderUpload.js';

const
  modalForm = util.getElement(formElementClass.uploadImageEditClass),
  scaleUp = util.getElement(scaleElements.scaleUpClass, modalForm),
  scaleDown = util.getElement(scaleElements.scaleDownClass, modalForm),
  scaleValue = util.getElement(scaleElements.scaleValueClass, modalForm);


scaleValue.value = `${scaleElements.DEFAULT_SCALE_VALUE}%`;


function renderValue(value) {
  scaleValue.value = `${value}%`;
  scaleValue.setAttribute('value', scaleValue.value);
}


const getValue = (value) => {
  const currentValue = parseInt(value, 10);
  return currentValue;
};

const renderScaleImage = (image, currentValue) => {
  image.style.transform = `scale(${currentValue / 100})`;
};

const
  addScale = () => {
    let currentValue = getValue(scaleValue.value);
    if (currentValue < scaleElements.MAX_SCALE_VALUE) {
      currentValue += 25;
      renderScaleImage(imagePreview, currentValue);
      renderValue(currentValue);
    }
  };


const
  downScale = () => {
    let currentValue = getValue(scaleValue.value);
    if (currentValue > scaleElements.MIN_SCALE_VALUE) {
      currentValue -= 25;
      renderScaleImage(imagePreview, currentValue);
      renderValue(currentValue);
    }
  };

const resetScale = () => {
  renderValue(scaleElements.DEFAULT_SCALE_VALUE);
  renderScaleImage(imagePreview, scaleElements.DEFAULT_SCALE_VALUE);
  evtHandler.removeListener(scaleUp, 'click', addScale);
  evtHandler.removeListener(scaleDown, 'click', downScale);
};


evtHandler.onClickLocal(scaleUp, addScale);
evtHandler.onClickLocal(scaleDown, downScale);

export { resetScale };

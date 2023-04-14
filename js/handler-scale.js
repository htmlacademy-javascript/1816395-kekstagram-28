import { evtHandler } from './handler-evt.js';
import { scaleElement } from './elements-settings.js';
import { imagePreview } from './render-upload.js';

const
  scaleUp = scaleElement.scaleUp,
  scaleDown = scaleElement.scaleDown,
  scaleValue = scaleElement.scaleValue,
  scaleDefault = scaleElement.DEFAULT_SCALE_VALUE,
  scaleMin = scaleElement.MIN_SCALE_VALUE,
  scaleMax = scaleElement.MAX_SCALE_VALUE;


scaleValue.value = `${scaleDefault}%`;


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
    if (currentValue < scaleMax) {
      currentValue += 25;
      renderScaleImage(imagePreview, currentValue);
      renderValue(currentValue);
    }
  };


const
  downScale = () => {
    let currentValue = getValue(scaleValue.value);
    if (currentValue > scaleMin) {
      currentValue -= 25;
      renderScaleImage(imagePreview, currentValue);
      renderValue(currentValue);
    }
  };

const resetScale = () => {
  renderValue(scaleDefault);
  renderScaleImage(imagePreview, scaleDefault);
  evtHandler.removeListener(scaleUp, 'click', addScale);
  evtHandler.removeListener(scaleDown, 'click', downScale);
};


evtHandler.onClickLocal(scaleUp, addScale);
evtHandler.onClickLocal(scaleDown, downScale);

export { resetScale };

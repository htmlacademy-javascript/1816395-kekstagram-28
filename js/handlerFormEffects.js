import { effectsElement } from './elementsSettings.js';

const
  effectsPreview = effectsElement.effectsPreview;

const
  handlerFormEffects = {
    generatePreviewEffects: function (uploadedImage) {
      effectsPreview.forEach((effectPreview) => {
        effectPreview.style.cssText =
          `background-image : url(${window.URL.createObjectURL(uploadedImage)})`;
      });
      return effectsPreview;
    },



  };

export { handlerFormEffects };

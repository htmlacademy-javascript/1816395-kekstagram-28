import { effectsElement, effectWrap, effectsPreviewClass } from './elementsSettings.js';
import { evtHandler } from './handlerEvt.js';
import { util } from './util.js';
import { formElement } from './elementsSettings.js';

const
  formInputEffect = formElement.formEffectInput,
  formInputEffectValue = formElement.formEffectInputValue,
  imagePreview = formElement.imagePreview,
  effectsPreview = effectsElement.effectsPreview,
  effectClass = effectsPreviewClass.previewEffectsClass,
  effectsSlider = effectsElement.effectsSlider,
  effectsStyle = {
    chrome: {
      // filter: grayscale(1)
      filter: 'grayscale',
      minValue: 0,
      maxValue: 1,
      stepValue: 0.01
    },
    sepia: {
      // filter: sepia(1)
      filter: 'sepia',
      minValue: 0,
      maxValue: 1,
      stepValue: 0.01
    },
    marvin: {
      // filter: invert(100 %)
      filter: 'invert',
      minValue: 0,
      maxValue: 100,
      stepValue: 1,
      specialSymbolValue: '%'
    },
    phobos: {
      // filter: blur(3px),
      filter: 'blur',
      minValue: 0,
      maxValue: 1,
      stepValue: 0.01,
      specialSymbolValue: 'px'
    },
    heat: {
      // filter: brightness(3)
      filter: 'brightness',
      minValue: 1,
      maxValue: 3,
      stepValue: 0.02
    }
  };

noUiSlider.create(effectsSlider, {
  range: {
    min: 0,
    max: 1
  },
  start: 100,
  step: 0.01,
  connect: 'lower'
});

const hideSlider = (slider) => {
  slider.classList.add('hidden');
};

const showSlider = (slider) => {
  slider.classList.remove('hidden');
};

const updateSlider = ({ minValue, maxValue, stepValue, specialSymbol = '', filter }) => {
  effectsSlider.noUiSlider.updateOptions(
    {
      range: {
        min: minValue,
        max: maxValue
      },
      start: maxValue,
      step: stepValue
    }
  );
  effectsSlider.noUiSlider.on('update', (...rest) => {
    const filterValue = `${filter}(${rest[0]}${specialSymbol})`;
    imagePreview.style.filter = filterValue;
    formInputEffectValue.value = rest[0];
  });
};


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


const
  renderEffect = (effect) => {
    const currentEffect = effect.classList[1];
    const previewClass = imagePreview;
    previewClass.classList = {};
    previewClass.classList.add(currentEffect);
    for (effect in effectsStyle) {
      if (currentEffect.includes(effect)) {
        // console.log(effect);
        formInputEffect.value = effect;
        updateSlider(effectsStyle[effect]);
        showSlider(effectsSlider);
        break;
      } else {
        hideSlider(effectsSlider);
      }
    }
  };
hideSlider(effectsSlider);
evtHandler.onClick(effectWrap, renderEffect, util.filterClassName(effectClass));

export { handlerFormEffects };

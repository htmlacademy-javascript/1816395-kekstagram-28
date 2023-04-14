import {
  effectsElement,
  effectWrap,
  effectsPreviewClass,
  formElement
} from './elements-settings.js';
import { evtHandler } from './handler-evt.js';
import { util } from './util.js';

const
  formInputEffect = formElement.formEffectInput,
  formInputEffectValue = formElement.formEffectInputValue,
  imagePreview = formElement.imagePreview,
  effectsPreview = effectsElement.effectsPreview,
  effectClass = effectsPreviewClass.previewEffectsClass,
  effectsSlider = effectsElement.effectsSlider,
  inputsEffects = effectsElement.effectInputs,
  effectsStyle = {
    chrome: {
      filter: 'grayscale',
      minValue: 0,
      maxValue: 1,
      stepValue: 0.01
    },
    sepia: {
      filter: 'sepia',
      minValue: 0,
      maxValue: 1,
      stepValue: 0.01
    },
    marvin: {
      filter: 'invert',
      minValue: 0,
      maxValue: 100,
      stepValue: 1,
      specialSymbolValue: '%'
    },
    phobos: {
      filter: 'blur',
      minValue: 0,
      maxValue: 1,
      stepValue: 0.01,
      specialSymbolValue: 'px'
    },
    heat: {
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

const updateSlider = ({ minValue, maxValue, stepValue, specialSymbolValue = '', filter }) => {
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
    const filterValue = `${filter}(${rest[0]}${specialSymbolValue})`;
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

const clearSelectionEffect = () => {
  inputsEffects.forEach((element) => {
    element.removeAttribute('checked');
  });
};

const renderSelectionEffect = (effect) => {
  clearSelectionEffect();
  inputsEffects.forEach((element) => {
    if (element.value === effect) {
      element.setAttribute('checked', '');
    }
  });

};

const
  renderEffect = (effect) => {
    renderSelectionEffect(effect.classList[1].slice(18));
    const currentEffect = effect.classList[1];
    imagePreview.classList = {};
    imagePreview.classList.add(currentEffect);
    for (effect in effectsStyle) {
      if (currentEffect.includes(effect)) {
        updateSlider(effectsStyle[effect]);
        showSlider(effectsSlider);
        break;
      } else {
        formInputEffect.value = 'none';
        hideSlider(effectsSlider);
        imagePreview.style = 'filter:';
      }
    }
  };
hideSlider(effectsSlider);
evtHandler.onClick(effectWrap, renderEffect, util.filterClassName(effectClass));

export { handlerFormEffects };

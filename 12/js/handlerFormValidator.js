import { formElement } from './elementsSettings.js';
import { evtHandler } from './handlerEvt.js';


const
  form = formElement.uploadForm,
  imageTags = formElement.imageTags,
  hashtag = /^#[a-zа-я0-9]{1,19}$/i,
  errorMessage = 'некоректно заполенены хэштеги',
  maxCountTags = 5;


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const isValidTag = (tag) => hashtag.test(tag);

const hasValidCount = (tags) => tags.length <= maxCountTags;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);

};


pristine.addValidator(
  imageTags,
  validateTags,
  errorMessage
);

const formOnsubmit = (evt) => {
  evt.preventDefault();
  if(pristine.validate()){
    form.submit();
  }
};

evtHandler.onSubmit(form, formOnsubmit);
evtHandler.onChange(form, pristine.validate);


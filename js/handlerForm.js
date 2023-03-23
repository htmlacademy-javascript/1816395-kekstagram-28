import { formElement } from './elementsSettings.js';
import { evtHandler } from './handlerEvt.js';


const
  form = formElement.uploadForm,
  imageTags = formElement.imageTags,
  imageComment = formElement.imageComment,
  formInputs = formElement.formInputs,
  hashtag = /^#[a-zа-я0-9]{1,19}$/i,
  errorMessage = 'некоректно заполенены хэштеги',
  maxCountTags = 5;


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper'
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
  const isValid = pristine.validate(formInputs.value);
  if (isValid) {
    console.log('форма валидна');
  } else {
    console.log('форма не валидна');
  }
};
form.addEventListener('submit', formOnsubmit);
evtHandler.onChange(form,pristine.validate);



//   return false;
// };
// console.log(form)
// evtHandler.onSubmit(form, formOnsubmit);

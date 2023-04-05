import { util } from './util.js';


const getElement = util.getElement;
const getElements = util.getElements;


const mainElements = {
  main: getElement('main'),
  body: getElement('body')
};


const templateClass = {
  classTemplateContent: '.picture',
  classCommentsWrap: '.picture__info',
  classImage: '.picture__img',
  classComments: '.picture__comments',
  classLikes: '.picture__likes',
  idTemplate: '#picture',
  classContainer: '.pictures'
};

const thumbnailElement = {
  container: getElement(templateClass.classContainer),
  template: getElement(
    templateClass.classTemplateContent,
    getElement(templateClass.idTemplate).content
  ),
  getCommentsWrap: function (parent) {
    return getElement(
      templateClass.classCommentsWrap,
      parent
    );
  }
};
const classModalBigImage = {
  wrap: '.big-picture',
  image: '.picture__img',
  imageTag: 'img',
  likes: '.likes-count',
  commentsCount: '.social__comment-count',
  comments: '.social__comments',
  description: '.social__caption',
  avatar: '.social__picture',
  closeButton: '.big-picture__cancel',
  commentsLoaderButton: '.social__comments-loader',
  socialPicture: '.social__picture',
  socialText: '.social__text',
  socialComment: '.social__comment'

};
const modalBigImageElementWrap = getElement(classModalBigImage.wrap);


const modalBigImageElement = {
  imageElement: getElement(
    classModalBigImage.image,
    modalBigImageElementWrap
  ),
  pictureElement: getElement(
    classModalBigImage.imageTag,
    modalBigImageElementWrap
  ),
  imageLikes: getElement(
    classModalBigImage.likes,
    modalBigImageElementWrap
  ),
  imageAvatar: getElement(
    classModalBigImage.avatar,
    modalBigImageElementWrap
  ),
  imageCommentsCount: getElement(
    classModalBigImage.commentsCount,
    modalBigImageElementWrap
  ),
  imageComments: getElement(
    classModalBigImage.comments,
    modalBigImageElementWrap
  ),
  imageDescription: getElement(
    classModalBigImage.description,
    modalBigImageElementWrap
  ),
  imageCloseButton: getElement(
    classModalBigImage.closeButton,
    modalBigImageElementWrap
  ),
  imageCommentsLoaderButton: getElement(
    classModalBigImage.commentsLoaderButton,
    modalBigImageElementWrap
  ),
  imageTag: getElement(
    classModalBigImage.imageTag,
    modalBigImageElementWrap
  )
};
const classForm = {
  uploadPicture: '.img-upload__title',
};

const
  formElementClass = {
    uploadFormClass: '.img-upload__form',
    uploadImageClass: '.img-upload__input',
    uploadImageEditClass: '.img-upload__overlay',
    imagePreviewWrapClass: '.img-upload__preview',
    uploadImageCancelBTNClass: '.img-upload__cancel',
    imageTagsClass: '.text__hashtags',
    imageCommentClass: '.text__description',
    imageEffectsValueClass: '.effect-level__value',
    imageEffectClass: '.effects__radio',
  };

const
  modalForm = getElement(formElementClass.uploadImageEditClass);


const
  formElement = {
    uploadFile: getElement(
      formElementClass.uploadImageClass
    ),
    imagePreview: getElement(
      'img',
      getElement(formElementClass.imagePreviewWrapClass)
    ),
    previewBtnCancel: getElement(
      formElementClass.uploadImageCancelBTNClass,
      modalForm
    ),

    imageTags: getElement(
      formElementClass.imageTagsClass,
      modalForm
    ),
    imageComment: getElement(
      formElementClass.imageCommentClass,
      modalForm
    ),
    uploadForm: getElement(
      formElementClass.uploadFormClass
    ),
    formInputs: getElements(
      'input',
      modalForm
    ),
    formEffectInputValue: getElement(
      formElementClass.imageEffectsValueClass,
      modalForm
    ),
    formEffectInput: getElement(
      formElementClass.imageEffectClass,
      modalForm
    )

  };


const scaleElementsClass = {
  scaleUpClass: '.scale__control--bigger',
  scaleDownClass: '.scale__control--smaller',
  scaleValueClass: '.scale__control--value'
};

const scaleElement = {
  scaleUp: getElement(
    scaleElementsClass.scaleUpClass,
    modalForm
  ),
  scaleDown: getElement(
    scaleElementsClass.scaleDownClass,
    modalForm
  ),
  scaleValue: getElement(
    scaleElementsClass.scaleValueClass,
    modalForm
  ),
  DEFAULT_SCALE_VALUE: 100,
  MIN_SCALE_VALUE: 25,
  MAX_SCALE_VALUE: 100
};

const effectsPreviewClass = {
  effectsWrapClass: '.effects__list',
  previewEffectsClass: '.effects__preview',
  sliderEffectsClass: '.img-upload__effect-level',
};

const
  effectWrap = getElement(effectsPreviewClass.effectsWrapClass, modalForm);

const effectsElement = {
  effectsPreview: getElements(
    effectsPreviewClass.previewEffectsClass,
    effectWrap
  ),
  effectsSlider: getElement(
    effectsPreviewClass.sliderEffectsClass,
    modalForm
  )
};

const
  templateErrorClass = {
    templateWrap: '.error',
    templateContent: '.error',
    templateContainer: '.error__inner',
    templateCloseButton: '.error__button',
    templateId: '#error'
  };


const
  templateErrorLoad = {

    template:

      getElement(
        templateErrorClass.templateId
      ).content
  };

const
  templateUploadClass = {
    templateWrap: '.img-upload__message--loading',
    templateId: '#messages'
  },
  templateUpload = getElement(templateUploadClass.templateId).content;

const
  templateSuccessClass = {
    templateWrap : '.success',
    templateContainer: '.success__inner',
    templateId : '#success',
    templateCloseButton: '.success__button'
  },
  templateSuccess = getElement(templateSuccessClass.templateId).content;

export {
  thumbnailElement,
  templateClass,
  classModalBigImage,
  modalBigImageElement,
  mainElements,
  modalBigImageElementWrap,
  classForm,
  formElementClass,
  modalForm,
  formElement,
  effectsPreviewClass,
  scaleElement,
  effectsElement,
  effectWrap,
  templateErrorLoad,
  templateErrorClass,
  templateUploadClass,
  templateUpload,
  templateSuccessClass,
  templateSuccess
};

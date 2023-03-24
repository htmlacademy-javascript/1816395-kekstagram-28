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
    previewEffectsClass: '.effects__preview',
    imageTagsClass: '.text__hashtags',
    imageCommentClass: '.text__description'
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
    effectsPreview: getElements(
      'span',
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
  scaleElement
};

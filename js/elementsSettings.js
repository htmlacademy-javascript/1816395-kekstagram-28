import { util } from './util.js';
const mainElements = {
  main: util.getElement('main'),
  body: util.getElement('body')
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
  container: util.getElement(templateClass.classContainer),
  template: util.getElement(
    templateClass.classTemplateContent,
    util.getElement(templateClass.idTemplate).content),
  getCommentsWrap: function (parent) {
    return util.getElement(templateClass.classCommentsWrap, parent);
  }
};
const classModalBigImage = {
  wrap:
    '.big-picture',
  image:
    '.picture__img',
  imageTag:
    'img',
  likes:
    '.likes-count',
  commentsCount:
    '.social__comment-count',
  comments:
    '.social__comments',
  description:
    '.social__caption',
  avatar:
    '.social__picture',
  closeButton:
    '.big-picture__cancel',
  commentsLoaderButton:
    '.social__comments-loader',
  socialPicture:
    '.social__picture',
  socialText:
    '.social__text',
  socialComment:
    '.social__comment'

};
const modalBigImageElementWrap = util.getElement(classModalBigImage.wrap);
const modalBigImageElement = {
  imageElement: util.getElement(classModalBigImage.image, modalBigImageElementWrap),
  pictureElement: util.getElement(classModalBigImage.imageTag, modalBigImageElementWrap),
  imageLikes: util.getElement(classModalBigImage.likes, modalBigImageElementWrap),
  imageAvatar: util.getElement(classModalBigImage.avatar, modalBigImageElementWrap),
  imageCommentsCount: util.getElement(classModalBigImage.commentsCount, modalBigImageElementWrap),
  imageComments: util.getElement(classModalBigImage.comments, modalBigImageElementWrap),
  imageDescription: util.getElement(classModalBigImage.description, modalBigImageElementWrap),
  imageCloseButton: util.getElement(classModalBigImage.closeButton, modalBigImageElementWrap),
  imageCommentsLoaderButton: util.getElement(classModalBigImage.commentsLoaderButton, modalBigImageElementWrap),
  imageTag: util.getElement(classModalBigImage.imageTag, modalBigImageElementWrap)
};
const classForm = {
  uploadPicture: '.img-upload__title',
};

const formElement = {
  uploadImageClass: '.img-upload__input',
  uploadImageEditClass: '.img-upload__overlay',
  imagePreviewWrapClass: '.img-upload__preview',
  uploadImageCancelBTNClass: '.img-upload__cancel',
  previewEffectsClass: '.effects__preview'
};


export {
  thumbnailElement,
  templateClass,
  classModalBigImage,
  modalBigImageElement,
  mainElements,
  modalBigImageElementWrap,
  classForm,
  formElement
};

import { util } from './util.js';
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

export { thumbnailElement, templateClass };

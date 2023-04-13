import './renderBigImage.js';
import './renderUpload.js';
import './handlerScale.js';
import './handlerFormEffects.js';
import { util } from './util.js';
import { thumbnailElement, templateClass } from './elementsSettings.js';
import { filterMethods } from './handlerFilters.js';


const generatePictureElement = (className, parent, { url, description, id }) => {
  const picture = util.getElement(className, parent);
  picture.src = url;
  picture.alt = description;
  picture.dataset.pictureId = id;
  thumbnailElement.container.appendChild(picture);
};

const generatePictureComments = (className, parent, { comments }) => {
  const pictureComments = util.getElement(className, thumbnailElement.getCommentsWrap(parent));
  pictureComments.textContent = comments.length;
};

const generatePictureLikes = (className, parent, { likes }) => {
  const likesElement = util.getElement(className, thumbnailElement.getCommentsWrap(parent));
  likesElement.textContent = likes;

};

const generateThumbnails = (dataPicture) => {
  const newElement = thumbnailElement.template.cloneNode(true);
  generatePictureElement(templateClass.classImage, newElement, dataPicture);
  generatePictureComments(templateClass.classComments, newElement, dataPicture);
  generatePictureLikes(templateClass.classLikes, newElement, dataPicture);
};


const clearThumbnailsContainer = () => {
  const currentThumbnailContainers = util
    .getElements(
      templateClass.classTemplateContent,
      thumbnailElement.container);
  currentThumbnailContainers.forEach((thumbnailContainer) =>
    thumbnailElement.container.removeChild(thumbnailContainer)
  );
};

const generateDomThumbnails = (DATA) => {
  clearThumbnailsContainer();
  DATA
    .forEach((dataPicture) => {
      generateThumbnails(dataPicture);
    });
  filterMethods.renderFilterSection();

};

export { generateDomThumbnails };

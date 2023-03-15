import {util} from './util.js';

// const util.getElement = (optionName, parent) => parent.querySelector(optionName);

const picturesContainer = util.getElement('.pictures');
const template = util.getElement('.picture', util.getElement('#picture').content);

const generatePictureElement = (className, parent,dataPicture) => {
  const picture = util.getElement(className, parent);
  picture.src = dataPicture.url;
  picture.alt = dataPicture.description;
  picturesContainer.appendChild(parent);
  // console.log(dataPicture);
  picture.id = dataPicture.id;
  picture.likes = dataPicture.likes;
  picture.description = dataPicture.description;
  picture.comments = dataPicture.comments;
};

const generatePictureComments = (className, parent,dataPicture)=>{
  const pictureComments = util.getElement(className, util.getElement('.picture__info', parent));
  pictureComments.textContent = dataPicture.comments.length;
};

const generatePictureLikes = (className, parent,dataPicture) =>{
  const likes = util.getElement(className, util.getElement('.picture__info', parent));
  likes.textContent = dataPicture.likes;

};

const generateElement = (dataPicture) => {
  const newElement = template.cloneNode(true);
  generatePictureElement('.picture__img', newElement, dataPicture);
  generatePictureComments('.picture__comments', newElement, dataPicture);
  generatePictureLikes('.picture__likes', newElement, dataPicture);
};

const generateDom = (dataPictures) =>{
  dataPictures.forEach((dataPicture) => {
    generateElement(dataPicture);
  });
};

export { generateDom };

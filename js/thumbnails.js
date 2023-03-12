const getElement = (optionName, parent) => parent.querySelector(optionName);

const picturesContainer = getElement('.pictures', document);
const template = getElement('.picture', getElement('#picture', document).content);

const generatePictureElement = (className, parent,dataPicture) => {
  const picture = getElement(className, parent);
  picture.src = dataPicture.url;
  picture.alt = dataPicture.description;
  picturesContainer.appendChild(parent);
};

const generatePictureComments = (className, parent,dataPicture)=>{
  const pictureComments = getElement(className, getElement('.picture__info', parent));
  pictureComments.textContent = dataPicture.comments.length;
};

const generatePictureLikes = (className, parent,dataPicture) =>{
  const likes = getElement(className, getElement('.picture__info', parent));
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

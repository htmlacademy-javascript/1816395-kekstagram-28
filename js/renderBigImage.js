import { util } from './util.js';
import { evtHandler } from './handlerEvt.js';
import { classModalBigImage, modalBigImageElement, mainElements, modalBigImageElementWrap } from './elementsSettings.js';
// import { DATA } from './generateMockData.js';


let currentPicture;


const takeData = (data) => {
  const DATA = data;
  const renderAvatar = (comment, parent) => {
    const avatar = document.createElement('img');
    const text = document.createElement('p');
    avatar.classList.add(util.filterClassName(classModalBigImage.socialPicture));
    text.classList.add(util.filterClassName(classModalBigImage.socialText));
    avatar.width = 35;
    avatar.height = 35;
    avatar.alt = comment.name;
    avatar.src = comment.avatar;
    parent.appendChild(avatar);
  };


  const renderTextComment = (comment, parent) => {
    const textComment = document.createElement('p');
    textComment.classList.add(util.filterClassName(classModalBigImage.socialText));
    textComment.textContent = comment.message;
    parent.appendChild(textComment);
  };


  const renderComments = (comments) => {
    const content = modalBigImageElement.imageComments;
    data.innerHTML = '';
    comments.forEach((comment) => {
      const newComment = document.createElement('li');
      newComment.classList.add(util.filterClassName(classModalBigImage.socialComment));
      renderAvatar(comment, newComment);
      renderTextComment(comment, newComment);
      content.appendChild(newComment);
    });
  };


  const renderBigImage = (thumbnail) => {
    currentPicture = thumbnail;
    currentPicture.counterComments = 2;
    modalBigImageElement.pictureElement.src = currentPicture.url;
    modalBigImageElement.pictureElement.alt = currentPicture.alt;
    modalBigImageElement.imageLikes.textContent = currentPicture.likes;
    modalBigImageElement.imageDescription.textContent = currentPicture.description;
    // modalBigImageElement.imageAvatar.src = currentPicture.avatar;
    modalBigImageElement.imageComments.textContent = `${currentPicture.comments.length} из 125 комментариев`;
    renderComments(currentPicture.comments.slice(0, currentPicture.counterComments));

  };

  const updateComments = () => {
    currentPicture.counterComments += 5;
    renderComments(currentPicture.comments.slice(0, currentPicture.counterComments));
  };

  const closeBigImage = () => {
    util.closeModal(modalBigImageElementWrap, mainElements.body);
  };


  const openBigImage = (thumbnail) => {
    renderBigImage(util.getCurrentPicture(DATA, thumbnail));
    util.openModal(modalBigImageElementWrap, mainElements.body);
  };

  evtHandler.onClick(mainElements.main, openBigImage, util.filterClassName(classModalBigImage.image));
  evtHandler.onClick(modalBigImageElement.imageCloseButton, closeBigImage);
  evtHandler.onKeydown(modalBigImageElement.imageCloseButton, util.isEnter, closeBigImage);
  evtHandler.onKeydown(document, util.isEscape, closeBigImage);
  evtHandler.onClick(modalBigImageElement.imageCommentsLoaderButton, updateComments);

};

export { takeData };

import { util } from './util.js';
import { evtHandler } from './handler-evt.js';
import {
  classModalBigImage,
  modalBigImageElement,
  mainElements,
  modalBigImageElementWrap
} from './elements-settings.js';


let currentPicture;
const bigImageContainerClass = util.filterClassName(classModalBigImage.image),
  bigImageCloseButton = modalBigImageElement.imageCloseButton,
  btnLoadComments = modalBigImageElement.imageCommentsLoaderButton;

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
    content.innerHTML = '';
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
    modalBigImageElement.imageCommentsCount.textContent = `${currentPicture.comments.length} из 125 комментариев`;
    renderComments(currentPicture.comments.slice(0, currentPicture.counterComments));

  };

  const updateComments = () => {
    currentPicture.counterComments += 5;
    renderComments(currentPicture.comments.slice(0, currentPicture.counterComments));
  };

  const closeBigImage = () => {
    util.closeModal(modalBigImageElementWrap, mainElements.body);

  };

  const closeOnKeyEnter = (evt) => {
    if (util.isEscape(evt)) {
      closeBigImage();
    }
  };

  const closeOnKeyEsc = (evt) => {
    if (util.isEscape(evt)) {
      closeBigImage();
    }
  };


  const openBigImage = (evt) => {
    const thumbnail = evt.target;
    if (util.testEventTarget(evt, bigImageContainerClass)) {
      renderBigImage(util.getCurrentPicture(DATA, thumbnail));
      util.openModal(modalBigImageElementWrap, mainElements.body);
    }
  };

  evtHandler.onClickLocal(mainElements.body, openBigImage);
  evtHandler.onClickLocal(bigImageCloseButton, closeBigImage);
  evtHandler.onClickLocal(btnLoadComments, updateComments);

  evtHandler.onKeydownSimple(mainElements.body, closeOnKeyEsc);
  evtHandler.onKeydownSimple(bigImageCloseButton, closeOnKeyEnter);
};

export { takeData };

import { util } from './util.js';
import { evtHandler } from './evtHandler.js';

const bigPictureWrap = util.getElement('.big-picture');
const container = util.getElement('main');
const picture = util.getElement('img', bigPictureWrap);
const pictureLikes = util.getElement('.likes-count', bigPictureWrap);
const pictureCommentsCount = util.getElement('.social__comment-count', bigPictureWrap);
const pictureComments = util.getElement('.social__comments', bigPictureWrap);
const pictureDescription = util.getElement('.social__caption', bigPictureWrap);
const buttonClosePicture = util.getElement('.big-picture__cancel', bigPictureWrap);
const body = util.getElement('body');
const socialCommentsLoader = util.getElement('.social__comments-loader', bigPictureWrap);

const renderAvatar = (comment, parent) => {
  const avatar = document.createElement('img');
  const text = document.createElement('p');
  avatar.classList.add('social__picture');
  text.classList.add('social__text');
  avatar.width = 35;
  avatar.height = 35;
  avatar.alt = comment.name;
  avatar.src = comment.Avatar;
  parent.appendChild(avatar);
};


const renderTextComment = (comment, parent) => {
  const textComment = document.createElement('p');
  textComment.classList.add('social__text');
  textComment.textContent = comment.Message;
  parent.appendChild(textComment);
};


const renderComments = (comments) => {
  pictureComments.innerHTML = '';
  comments.forEach((comment) => {
    const newComment = document.createElement('li');
    newComment.classList.add('social__comment');
    renderAvatar(comment, newComment);
    renderTextComment(comment, newComment);
    pictureComments.appendChild(newComment);
  });
};


const renderBigImage = (thumbnail) => {
  picture.src = thumbnail.src;
  picture.alt = thumbnail.alt;
  pictureLikes.textContent = thumbnail.likes;
  pictureDescription.textContent = thumbnail.alt;
  pictureCommentsCount.textContent = `${thumbnail.comments.length} из 125 комментариев`;
  renderComments(thumbnail.comments);
};


const closeBigImage = () => {
  bigPictureWrap.classList.add('hidden');
  // evtHandler.removeListener(document,'keydown',closeBigImage);

};


const openBigImage = (thumbnail) => {
  body.classList.add('.modal-open');
  socialCommentsLoader.classList.add('hidden');
  renderBigImage(thumbnail);
  bigPictureWrap.classList.remove('hidden');
  document.removeEventListener('keydown', closeBigImage);
  // document.addEventListener('keydown', onDocumentEscDown);
  // console.log(body);
  // console.log(pictureComments);
  // console.log(bigPictureWrap);
};
evtHandler.onKeydown(document,util.isEscape,closeBigImage);
evtHandler.onClick(container, openBigImage, 'picture__img');
evtHandler.onClick(buttonClosePicture, closeBigImage);
evtHandler.onKeydown(buttonClosePicture,util.isEnter,closeBigImage);



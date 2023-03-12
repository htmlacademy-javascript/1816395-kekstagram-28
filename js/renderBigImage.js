import { util } from './util.js';
const bigPicture = util.getElement('.big-picture');
const container = util.getElement('main');


const renderBigImage = () => {
  bigPicture.classList.remove('hidden');
  console.log(container);

};

container.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('picture__img')) {
    evt.preventDefault();
    renderBigImage();
  }
});

export { renderBigImage };

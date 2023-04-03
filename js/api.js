import { generateDomThumbnails } from './renderThumbnails.js';
import { takeData } from './renderBigImage.js';
import { setUserFormSubmit } from './handlerFormValidator.js';
import { closeModalForm } from './renderUpload.js';


const
  BASE_URL = 'https://28.javascript.pages.academy/kekstagram',
  Route = {
    GET_DATA: '/data',
    SEND_DATA: '/',
  };

const
  ErrorText = {
    GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
    SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
  };

const APImethods = {
  getData: function () {
    fetch(
      `${BASE_URL}${Route.GET_DATA}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .catch(() => {
        throw new Error(ErrorText.GET_DATA);
      });
  },
};

fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((pictures) => {
    generateDomThumbnails(pictures);
    takeData(pictures);
  });

setUserFormSubmit(closeModalForm);

export { APImethods };



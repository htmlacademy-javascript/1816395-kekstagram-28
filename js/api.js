// import { generateDomThumbnails } from './renderThumbnails.js';
// import { takeData } from './renderBigImage.js';
import { setUserFormSubmit } from './handlerFormValidator.js';
import { closeModalForm } from './renderUpload.js';
import { mainElements } from './elementsSettings.js';
import { util } from './util.js';
import { generateErrorLoad } from './handlerMessages.js';


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
  },
  Method = {
    GET: 'GET',
    POST: 'POST',
  },
  showAlert = util.showAlert;


const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      showAlert(errorText, mainElements.body);
    });


const getData = (onSuccess1, onSuccess2) => {
  load(Route.GET_DATA, ErrorText.GET_DATA)
    .then((pictures) => {
      onSuccess1(pictures);
      onSuccess2(pictures);
    }
    );
};


const sendData = (body, onSuccess) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body)
  .catch(
    generateErrorLoad()
  )
  .finally(() => onSuccess());


setUserFormSubmit(closeModalForm);

export { sendData, getData };



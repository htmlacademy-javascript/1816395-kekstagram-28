import { setUserFormSubmit } from './handler-form-validator.js';
import { closeModalForm } from './render-upload.js';
import { mainElements } from './elements-settings.js';
import { util } from './util.js';


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


const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body,);


setUserFormSubmit(closeModalForm);

export { sendData, getData };



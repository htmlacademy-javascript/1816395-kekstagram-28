

const util = {
  getElement: function (optionName, parent = document) {
    return parent.querySelector(optionName);
  },
  getElements: function (optionName, parent = document) {
    return parent.querySelectorAll(optionName);
  }
  ,
  getRandom: function (max) {
    return Math.floor(Math.random() * max);
  },
  isEscape: function (evt) {
    return evt.key === 'Escape';
  },
  isEnter: function (evt) {
    return evt.key === 'Enter';
  },
  getCount: function (start, step) {
    let count = start;
    return function generateCount() {
      return (count = count + step);
    };
  },
  openModal: function (modal, body) {
    body.classList.add('modal-open');
    modal.classList.remove('hidden');
  },
  closeModal: function (modal, body) {
    body.classList.remove('modal-open');
    modal.classList.add('hidden');
  },
  openModalInput: function (modalForm, body) {
    body.classList.add('modal-open');
    modalForm.classList.remove('visually-hidden');
  },
  closeModalForm: function (modalForm, body) {
    body.classList.remove('modal-open');
    modalForm.classList.add('visually-hidden');
  },
  filterClassName: function (className) {
    const classWithoutDot = className.replace('.', '');
    return classWithoutDot;
  },
  getCurrentPicture: function (DATA, thumbnail) {
    // console.log(+thumbnail.dataset.pictureId);
    return DATA.find((item) => item.id === +thumbnail.dataset.pictureId);
  }

};


export { util };


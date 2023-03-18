

const util = {
  getElement: function (optionName, parent = document) {
    return parent.querySelector(optionName);
  },
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
  }

};


export { util };


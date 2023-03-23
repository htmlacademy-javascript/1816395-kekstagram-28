const evtHandler = {
  onClick: function (element, func, className) {
    element.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(className)) {
        evt.preventDefault();
        func(evt.target);
      }
      if (!className) {
        func();
      }
    });
  },
  onClickLocal: function (element, func) {
    element.addEventListener('click', func);
  },
  onChange: function (element, func, className) {
    element.addEventListener('change', (evt) => {
      if (evt.target.value !== '') {
        // debugger
        func();
      }
      if (!className) {
        func();
      }
    });
  }
  ,
  onKeydown: function (element, testFunc, func) {
    element.addEventListener('keydown', (evt) => {
      if (testFunc(evt)) {
        func();
      }
    }, true);
  },
  onSubmit: function (form, func) {
    form.addEventListener('submit', func());
  },
  removeListener: function (element, listener, func) {
    element.removeEventListener(listener, func);
  },
};

export { evtHandler };

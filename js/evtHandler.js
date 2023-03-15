const evtHandler = {
  onClick: function (element, func, className) {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (evt.target.classList.contains(className)) {
        func(evt.target);
      }
      if (!className) {
        func();
      }
    });
  },
  onKeydown: function (element, testFunc, func) {
    element.addEventListener('keydown', (evt) => {
      if (testFunc(evt)) {
        func();
      }
    }, true);
  },
  removeListener: function (element, listener, func) {
    element.removeEventListener(listener, func);
  },
};

export { evtHandler };

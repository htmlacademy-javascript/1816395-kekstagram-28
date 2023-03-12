const util = {
  getElement: function (optionName, parent = document) {
    return parent.querySelector(optionName);
  },
  getRandom: function (max) {
    return Math.floor(Math.random() * max);
  }

};


export { util };

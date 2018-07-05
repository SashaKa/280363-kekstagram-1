'use strict';

(function () {
  window.utils = {
    getRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    getRandomElFromArr: function (arr) {
      return arr[Math.floor(Math.random() * (arr.length - 0)) + 0];
    },
    removeHidden: function (elem) {
      elem.classList.remove('hidden');
    },
    addHidden: function (elem) {
      elem.classList.add('hidden');
    },
    addVisuallyHidden: function (elem) {
      elem.classList.add('visually-hidden');
    },
    createErrorMessage: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 10; margin: 2% auto; padding: 3%; text-align: center; background-color: tomato;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.height = '10%';
      node.style.fontSize = '24px';
      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    }
  };
})();

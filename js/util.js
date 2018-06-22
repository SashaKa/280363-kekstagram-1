'use strict';

(function () {
  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  var getRandomElFromArr = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  window.util = {
    getRandomNumber: getRandomNumber,
    getRandomElFromArr: getRandomElFromArr
  };
})();

'use strict';

(function () {
  window.random = function (arr) {
    var randomNumber = Math.round(Math.random() * (arr.length - 1));
    var info = arr[randomNumber];

    return info;
  };

})();

'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var userName = document.querySelector('.setup-user-name');

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keycode === ESC_KEYCODE) {
        if (userName === document.activeElement) {
          evt.preventDefault();
        } else {
          action();
        }
      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
})();

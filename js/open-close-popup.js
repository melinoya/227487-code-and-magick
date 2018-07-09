'use strict';

(function () {
  var popup = document.querySelector('.setup');
  var open = document.querySelector('.setup-open');
  var openIcon = document.querySelector('.setup-open-icon');
  var close = popup.querySelector('.setup-close');
  var closePopup = function () {
    popup.classList.add('hidden');
    document.removeEventListener('keydown', onEscClose);
  };

  var onEscClose = function () {
    document.addEventListener('keydown', function (evt) {
      window.util.isEscEvent(evt, closePopup);
    });
  };
  var openPopup = function () {
    popup.classList.remove('hidden');
    onEscClose();
  };
  open.addEventListener('click', function () {
    openPopup();
  });
  openIcon.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });
  close.addEventListener('click', function () {
    closePopup();
  });
  close.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });
})();

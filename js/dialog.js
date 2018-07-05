'use strict';

(function () {
  var dialogWindow = document.querySelector('.setup');
  var userPic = document.querySelector('.upload');
  var submit = document.querySelector('.setup-submit');
  var close = document.querySelector('.setup-close');

  userPic.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      dialogWindow.style.top = (dialogWindow.offsetTop - shift.y) + 'px';
      dialogWindow.style.left = (dialogWindow.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (notClickEvt) {
          notClickEvt.preventDefault();
          userPic.removeEventListener('click', onClickPreventDefault);
        };
        userPic.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var onCloseDialog = function () {
    dialogWindow.style.top = null;
    dialogWindow.style.left = null;
  };

  submit.addEventListener('click', onCloseDialog);
  close.addEventListener('click', onCloseDialog);

})();

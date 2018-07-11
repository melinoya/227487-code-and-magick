'use strict';
(function () {
  var dialogWindow = document.querySelector('.setup');

  var wizardList = document.querySelector('.setup-similar-list');

  // var characters = window.characteristics.makeCharacters();

  var fragment = document.createDocumentFragment();

  var loadThings = function (wizards) {
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(window.createWizard(wizards[i]));
    }
    wizardList.appendChild(fragment);

    dialogWindow.querySelector('.setup-similar').classList.remove('hidden');
  };


  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save('https://js.dump.academy/code-and-magick', new FormData(form), function () {
      dialogWindow.classList.add('hidden');
    }, showError);
    evt.preventDefault();
  });

  var showError = function (error) {
    document.querySelector('.error-popup').classList.remove('hidden');
    document.querySelector('.error-popup__fill').innerHTML = error;
  };

  window.backend.load('https://js.dump.academy/code-and-magick/data', loadThings, showError);
})();

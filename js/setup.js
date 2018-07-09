'use strict';

var dialogWindow = document.querySelector('.setup');

dialogWindow.querySelector('.setup-similar').classList.remove('hidden');

var wizardList = document.querySelector('.setup-similar-list');

var characters = window.characteristics.makeCharacters();

var fragment = document.createDocumentFragment();

for (var i = 0; i < characters.length; i++) {
  fragment.appendChild(window.createWizard(characters[i]));
  wizardList.appendChild(fragment);
}

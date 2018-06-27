'use strict';

var dialogWindow = document.querySelector('.setup');
dialogWindow.classList.remove('hidden');

dialogWindow.querySelector('.setup-similar').classList.remove('hidden');

var wizardList = document.querySelector('.setup-similar-list');

var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var nameList = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var surnameList = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var colorList = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyeList = ['black', 'red', 'blue', 'yellow', 'green'];

var random = function (arr) {
  var randomNumber = Math.round(Math.random() * (arr.length - 1));
  var info = arr[randomNumber];

  return info;
};

var makeCharacters = function () {
  var charactersList = [];
  for (var i = 0; i < 4; i++) {
    var character = {};

    var characterName = random(nameList) + ' ' + random(surnameList);
    character.name = characterName;

    var characterColor = random(colorList);
    character.coatColor = characterColor;

    var characterEye = random(eyeList);
    character.eyesColor = characterEye;

    charactersList[i] = character;
  }

  return charactersList;
};

var characters = makeCharacters();

var createWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < characters.length; i++) {
  fragment.appendChild(createWizard(characters[i]));
  wizardList.appendChild(fragment);
}

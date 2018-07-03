'use strict';

var dialogWindow = document.querySelector('.setup');

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

    character.name = random(nameList) + ' ' + random(surnameList);

    character.coatColor = random(colorList);

    character.eyesColor = random(eyeList);

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

// ---------------------- module4-task1 --------------------------
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var userName = document.querySelector('.setup-user-name');
var open = document.querySelector('.setup-open');
var openIcon = document.querySelector('.setup-open-icon');
var close = dialogWindow.querySelector('.setup-close');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var form = document.querySelector('.setup-wizard-form');
var coatElem = form.elements['coat-color'];
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var eyesElem = form.elements['eyes-color'];
var fireball = document.querySelector('.setup-fireball-wrap');
var fireballElem = form.elements['fireball-color'];

var onEscClose = function () {
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      if (userName === document.activeElement) {
        event.preventDefault();
      } else {
        dialogWindow.classList.add('hidden');
      }
    }
  });
};

var openPopup = function () {
  dialogWindow.classList.remove('hidden');
  onEscClose();
};

var closePopup = function () {
  dialogWindow.classList.add('hidden');
  document.removeEventListener('keydown', onEscClose);
};
// ---------------------- окно открывается --------------------------
open.addEventListener('click', function () {
  openPopup();
});

openIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

// ------------------------------ окно закрывается ---------------------------
close.addEventListener('click', function () {
  closePopup();
});

close.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// ------------------------------------ изменение цвета мантии ---------------
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = random(colorList);
  coatElem.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = random(eyeList);
  eyesElem.value = wizardEyes.style.fill;
});

fireball.addEventListener('click', function () {
  var randomFireball = random(fireballColors);
  fireball.style.background = randomFireball;
  fireballElem.value = randomFireball;
});


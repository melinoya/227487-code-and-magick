'use strict';

(function () {
  window.characteristics = {
    nameList: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],

    surnameList: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],

    colorList: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],

    eyeList: ['black', 'red', 'blue', 'yellow', 'green'],

    makeCharacters: function () {
      var charactersList = [];

      for (var i = 0; i < 4; i++) {
        var character = {};
        character.name = window.random(this.nameList) + ' ' + window.random(this.surnameList);
        character.coatColor = window.random(this.colorList);
        character.eyesColor = window.random(this.eyeList);
        charactersList[i] = character;
      }
      return charactersList;
    }
  };
})();

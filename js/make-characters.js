'use strict';

(function () {
  window.characteristics = {
    nameList: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],

    surnameList: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],

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

'use strict';

(function () {
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var form = document.querySelector('.setup-wizard-form');
  var coatElem = form.elements['coat-color'];
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var eyesElem = form.elements['eyes-color'];
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballElem = form.elements['fireball-color'];

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.random(window.characteristics.colorList);
    coatElem.value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.random(window.characteristics.eyeList);
    eyesElem.value = wizardEyes.style.fill;
  });

  fireball.addEventListener('click', function () {
    var randomFireball = window.random(fireballColors);
    fireball.style.background = randomFireball;
    fireballElem.value = randomFireball;
  });

})();

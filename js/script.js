"use strict"

var fireballSize = 22;

var getFireballSpeed = function (left) {
  left = true ? 5 : 2;
  return left;
};

var wizardSpeed = 3;
var wizardWidth = 70;

var getWizardHeight = function () {
  return wizardWidth * 1.337;
};

var getWizardX = function (width) {
  return width / 2 - wizardWidth / 2;
};

var getWizardY = function (height) {
  return height * 1 / 3;
};

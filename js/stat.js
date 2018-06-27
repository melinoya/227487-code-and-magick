'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var CLOUD_OFFSET = 10;
var TEXT_OFFSET = 20;
var COLUMN_WIDTH = 40;
var COLUMN_OFFSET = 50;
var COLUMN_MAX_HEIGHT = 150;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getColor = function () {
  var blue = Math.floor(Math.random() * 255);
  var columnColor = 'rgb(0, 0, ' + blue.toString() + ')';

  return columnColor;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_OFFSET, CLOUD_Y + CLOUD_OFFSET, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_OFFSET, CLOUD_Y + CLOUD_OFFSET);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_OFFSET, CLOUD_Y + CLOUD_OFFSET + TEXT_OFFSET);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], CLOUD_X + COLUMN_OFFSET + i * (COLUMN_WIDTH + COLUMN_OFFSET), CLOUD_HEIGHT + CLOUD_OFFSET);

    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getColor();

    ctx.fillRect(CLOUD_X + COLUMN_OFFSET + i * (COLUMN_WIDTH + COLUMN_OFFSET), CLOUD_HEIGHT - (COLUMN_MAX_HEIGHT * times[i]) / maxTime, COLUMN_WIDTH, (COLUMN_MAX_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_OFFSET + i * (COLUMN_WIDTH + COLUMN_OFFSET), CLOUD_HEIGHT - TEXT_OFFSET - (COLUMN_MAX_HEIGHT * times[i]) / maxTime);
  }
};

'use strict';

(function () {
  var keyCodes = {
    ENTER: 13,
    ESC: 27
  };
 
  window.util = {
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === keyCodes.ESC) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === keyCodes.ENTER) {
        action();
      }
    }
  };
})();
'use strict';

(function () {
  var pictureSizeField = document.querySelector('.upload-resize-controls-value');
  var pictureSizeDecButton = document.querySelector('.upload-resize-controls-button-dec');
  var pictureSizeIncButton = document.querySelector('.upload-resize-controls-button-inc');
  var imagePreview = document.querySelector('.effect-image-preview');
  var effectControls = document.querySelector('.upload-effect-controls');
  var value = +pictureSizeField.value.substring(0, pictureSizeField.value.length - 1);

  var pictureSizeFieldInc = function () {
    if (value < 100) {
      value = value + 25;
      pictureSizeField.value = value + '%';
      imagePreview.style = 'transform: scale(' + (value / 100) + ')';
    }
  };
 
  var pictureSizeFieldDec = function () {
    if (value > 25) {
      value = value - 25;
      pictureSizeField.value = value + '%';
      imagePreview.style = 'transform: scale(' + (value / 100) + ')';
    }
  };

  var effectFilterOn = function (node) {
    if (imagePreview.classList.length > 1) {
      imagePreview.classList.remove(imagePreview.classList[1]);
    }

    imagePreview.classList.add('effect-' + node.value);
  };
  
  var onPictureSizeIncButtonClick = function () {
    pictureSizeFieldInc();
  };
 
  var onPictureSizeDecButtonClick = function () {
    pictureSizeFieldDec();
  };
  
  var onEffectControlsClick = function (evt) {
    var target = evt.target;
    while (target !== effectControls) {
      if (target.tagName === 'INPUT') {
        effectFilterOn(target);
      }
      target = target.parentNode;
    }
  };
  
  pictureSizeDecButton.addEventListener('click', onPictureSizeDecButtonClick);
  pictureSizeIncButton.addEventListener('click', onPictureSizeIncButtonClick);
  effectControls.addEventListener('click', onEffectControlsClick);
})();
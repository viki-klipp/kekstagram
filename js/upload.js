'use strict';

(function () {
  var form = document.querySelector('#upload-select-image');
  var uploadForm = form.querySelector('.upload-image');
  var uploadInput = uploadForm.querySelector('#upload-file');
  var framingForm = form.querySelector('.upload-overlay');
  var uploadCancel = framingForm.querySelector('.upload-form-cancel');
  var uploadSubmit = framingForm.querySelector('.upload-form-submit');
  var commentForm = framingForm.querySelector('.upload-form-description');
  var hashTagForm = framingForm.querySelector('.upload-form-hashtags');
 
  var framingFormOpen = function () {
    framingForm.classList.remove('hidden');
    uploadForm.classList.add('hidden');

    document.addEventListener('keydown', onDocumentEscPress);
    uploadCancel.addEventListener('click', onUploadCancelClick);
    uploadCancel.addEventListener('keydown', onUploadCancelEnterPress);
    uploadSubmit.addEventListener('click', onUploadSubmitClick);
    uploadSubmit.addEventListener('keydown', onUploadSubmitEnterPress);
  };
 
  var framingFormClose = function () {
    framingForm.classList.add('hidden');
    uploadForm.classList.remove('hidden');
    document.removeEventListener('keydown', onDocumentEscPress);
  };

  var uploadFormSubmit = function (evt) {
    evt.preventDefault();

    commentForm.style.borderColor = null;
    commentForm.style.borderWidth = null;
    hashTagForm.style.borderColor = null;
    hashTagForm.style.borderWidth = null;

    var hashtagValue = hashTagForm.value;
    var hashtagValues = hashtagValue.split([' ']);
    var matchCount = 0;

    for (var i = 0; i < hashtagValues.length; i++) {
      if (hashtagValues.includes(hashtagValues[i], i + 1)) {
        matchCount++;
      }
    }

    if (!commentForm.validity.valid) {
      commentForm.style.borderColor = 'red';
      commentForm.style.borderWidth = '2px';
      if (hashTagForm.validity.patternMismatch) {
        hashTagForm.style.borderColor = 'red';
        hashTagForm.style.borderWidth = '2px';
      } else if (matchCount > 0) {
        hashTagForm.style.borderColor = 'red';
        hashTagForm.style.borderWidth = '2px';
      }
    } else if (hashTagForm.validity.patternMismatch) {
      hashTagForm.style.borderColor = 'red';
      hashTagForm.style.borderWidth = '2px';
    } else if (matchCount > 0) {
      hashTagForm.style.borderColor = 'red';
      hashTagForm.style.borderWidth = '2px';
    } else {
      form.submit();
    }
  };

  var onDocumentEscPress = function (evt) {
    if (commentForm !== document.activeElement) {
      window.util.isEscEvent(evt, framingFormClose);
    }
  };
  
  var onUploadCancelClick = function () {
    framingFormClose();
  };
  
  var onUploadCancelEnterPress = function (evt) {
    window.util.isEnterEvent(evt, framingFormClose);
  };

  var onUploadSubmitClick = function (evt) {
    uploadFormSubmit(evt);
  };
 
  var onUploadSubmitEnterPress = function (evt) {
    window.util.isEnterEvent(evt, uploadFormSubmit);
  };
  
  var onUploadInputChange = function () {
    framingFormOpen();
  };
 
  uploadInput.addEventListener('change', onUploadInputChange);
})();
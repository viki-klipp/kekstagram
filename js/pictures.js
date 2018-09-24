'use strict';

(function () {
   var generateElements = function (photo) {
    var photoElement = document.querySelector('#picture-template').content.cloneNode(true);

    photoElement.querySelector('img').src = photo.url;
    photoElement.querySelector('.picture-likes').textContent = photo.likes;
    photoElement.querySelector('.picture-comments').textContent = photo.comments.length.toString();

    return photoElement;
  };

  var showPhotoElements = function (photos) {
    var fragment = document.createDocumentFragment();
    var pictures = document.querySelector('.pictures');
    for (var i = 0; i < photos.length; i++) {
      fragment.appendChild(generateElements(photos[i]));
    }
    pictures.appendChild(fragment);
  };

  window.backend.load(showPhotoElements);
})();
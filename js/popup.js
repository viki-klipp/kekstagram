'use strict';

(function () {
  var gallery = document.querySelector('.gallery-overlay');
  var pictureList = document.querySelectorAll('.picture');
  var galleryClose = gallery.querySelector('.gallery-overlay-close');
  
  var closePopup = function () {
    gallery.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentEscPress);
  };

  var openPopup = function (evt) {
    gallery.classList.remove('hidden');
    renderPopup(evt);
    document.addEventListener('keydown', onDocumentEscPress);
  };

  var renderPopup = function (evt) {
    var image = evt.currentTarget.querySelector('img').src;
    var likes = evt.currentTarget.querySelector('.picture-likes').textContent;
    var comments = evt.currentTarget.querySelector('.picture-comments').textContent;

    gallery.querySelector('.gallery-overlay-image').src = image;
    gallery.querySelector('.likes-count').textContent = likes;
    gallery.querySelector('.comments-count').textContent = comments;
  };

  var onPictureClick = function (evt) {
    evt.preventDefault();
    openPopup(evt);
  };

  var onPictureEnterPress = function (evt) {
    window.util.isEnterEvent(evt, openPopup);
    document.addEventListener('keydown', onDocumentEscPress);
  };

  var onGalleryCloseClick = function () {
    closePopup();
  };

  var onGalleryCloseEnterPress = function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  };

  var onDocumentEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };
 
  galleryClose.addEventListener('click', onGalleryCloseClick);
  galleryClose.addEventListener('keydown', onGalleryCloseEnterPress);

  for (var i = 0; i < pictureList.length; i++) {
    pictureList[i].addEventListener('click', onPictureClick);
    pictureList[i].addEventListener('keydown', onPictureEnterPress);
  }
})();
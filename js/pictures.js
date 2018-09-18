'use strict';

(function () {
  var generatePhotos = function (quantity) {
    var comments = [
      'Всё отлично!', 'В целом не плохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убрать палец из кадра. В конце концов это просто непрофессионально',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой недачный момент?'
    ];

    var photos = [];

    for (var i = 1; i <= quantity; i++) {
      var photo = {
        url: 'photos/' + i + '.jpg',
        likes: window.util.getRandomInt(15, 201)
      };

      if (window.util.getRandomInt(0, 2) > 0) {
        photo.comments = [comments[window.util.getRandomInt(0, comments.length)], 
          comments[window.util.getRandomInt(0, comments.length)]];
      } else {
        photo.comments = [comments[window.util.getRandomInt(0, comments.length)]];
      }

      photos.push(photo);
    }

    return photos;
  };

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

  showPhotoElements(generatePhotos(25));
})();
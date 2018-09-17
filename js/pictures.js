'use strict';

var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var getPictures = function(quantity) {
    var arr = [];

    for (var i = 0; i < quantity; i++) {
        arr.push({
            url: 'photos/' + (i + 1) + '.jpg',
            likes: getRandomInt(15, 200),
            comments: CONTENT_EXAMPLES.comments[getRandomInt(0, CONTENT_EXAMPLES.comments.length)],
            description: CONTENT_EXAMPLES.descriptions[getRandomInt(0, CONTENT_EXAMPLES.descriptions.length)]
        });
    }

    return arr;
};

var renderPictures = function(arr, template) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < arr.length; i++) {
        var picture = template.cloneNode(true);

        picture.querySelector('img').src = arr[i].url;
        picture.querySelector('.picture-likes').textContent = arr[i].likes;
        picture.querySelector('.picture-comments').textContent = arr[i].comments.length.toString();

        fragment.appendChild(picture);
    }

    return fragment;
};

var renderBigPicture = function(data) {
    var bigPicture = document.querySelector('.gallery-overlay');

    bigPicture.querySelector('.gallery-overlay-image').src = data.url;
    bigPicture.querySelector('.likes-count').textContent = data.likes;
    bigPicture.querySelector('.comments-count').textContent = data.comments.length.toString();

    bigPicture.classList.remove('hidden');
};

var DESCRIPTION_EXAMPLES = [
    ''
];

var CONTENT_EXAMPLES = {
    comments: [
        'Все отлично!',
        'В целом все не плохо. Но не все!',
        'Когда вы делаете фото, хорошо бы убирать палец из кадра!',
        'Моя бабушка чихнула с фотиком в руказ и у нее вышло лучше.',
        'Мой кот сделал бы лучше.',
        'Как можно было поймать такой неудачный момент?!'
    ],
    descriptions: [
        'Тестим новую камеру!',
        'Затусили с друзьями на море',
        'Как же круто тут кормят',
        'Отдыхаем...',
        'Вот это тачка!'
    ]
};

var pictures = getPictures(25);
var similarPicturesList = document.querySelector('.pictures');
var template = document.getElementById('picture-template')
    .content
    .querySelector('.picture');

similarPicturesList.appendChild(renderPictures(pictures, template));

renderBigPicture(pictures[0]);

'use strict';

(function () {
  var PICTURE_DESCRIPTION = [
    'Тестим новую камеру!',
    'Затусили с друзьями на море',
    'Как же круто тут кормят',
    'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'
  ];
  var PICTURES_COMMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  var QTY_PICTURES = 25;
  var MIN_QTY_LIKES = 15;
  var MAX_QTY_LIKES = 200;
  var AVATAR = {
    min: 1,
    max: 6
  };
  var sectionForPost = document.querySelector('.pictures');

  var getPicturesArr = function () {
    var pictures = [];

    for (var i = 0; i < QTY_PICTURES; i++) {
      var imgNum = (i + 1);

      pictures[i] = {
        src: 'photos/' + imgNum + '.jpg',
        comment: window.util.getRandomElFromArr(PICTURES_COMMENTS),
        likes: window.util.getRandomNumber(MIN_QTY_LIKES, MAX_QTY_LIKES),
        description: window.util.getRandomElFromArr(PICTURE_DESCRIPTION)
      };
    }
    return pictures;
  };

  // Creating elemetn for pictures

  var pushPicture = function (pictures) {
    var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture__link');
    var pictureElement = pictureTemplate.cloneNode(true);
    var pictureImg = pictureTemplate.querySelector('.picture__img');
    var commentString = pictureTemplate.querySelector('.picture__stat--comments');
    var likes = pictureTemplate.querySelector('.picture__stat--likes');

    pictureImg.src = pictures.src;
    commentString.textContent = pictures.comment.length;
    likes.textContent = pictures.likes;

    return pictureElement;
  };


  // filling a pictures

  var fillPictures = function (pictures) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < QTY_PICTURES; i++) {
      fragment.appendChild(pushPicture(pictures[i]));
    }
    sectionForPost.appendChild(fragment);
  };

  var pictures = getPicturesArr();
  fillPictures(pictures);

  // Showing big picture

  var bigPicture = document.querySelector('.big-picture');

  var showBigPicture = function () {
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.social__comment-count').classList.add('visually-hidden');
    bigPicture.querySelector('.social__loadmore').classList.add('visually-hidden');
  };
  showBigPicture();

  // Data for a big picture

  var bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = pictures[0].src;

  var bigPictureLikes = bigPicture.querySelector('.likes-count');
  bigPictureLikes.textContent = pictures[0].likes;

  var bigPictureComments = bigPicture.querySelector('.comments-count');
  bigPictureComments.textContent = pictures[0].comment;

  var bigPictureDescription = bigPicture.querySelector('.social__caption');
  bigPictureDescription.textContent = pictures[0].description;

  var getRandomAvatar = function () {
    return 'img/avatar-' + window.util.getRandomNumber(AVATAR.min, AVATAR.max) + '.svg';
  };

  var makeAComment = function () {
    var listOfComments = document.querySelector('.social__comments');
    listOfComments.innerHTML = '';
    var fragmentOfComment = document.createDocumentFragment();
    var itemOfComment = document.createElement('li');
    itemOfComment.classList = 'social__comment social__comment--text';
    var avatarForComment = document.createElement('img');
    avatarForComment.classList('social__picture');
    avatarForComment.src = getRandomAvatar();
    avatarForComment.width = '35';
    avatarForComment.height = '35';
    avatarForComment.alt = 'Аватар комментатора фотографии';
    var textOfComment = document.createTextNode(pictures[0].comment);
    itemOfComment.appendChild(avatarForComment);
    itemOfComment.appendChild(textOfComment);
    fragmentOfComment.appendChild(itemOfComment);
    listOfComments.appendChild(fragmentOfComment);
  };

  makeAComment();
  // Open/close popup

  var ESC_KEY_CODE = 27;
  var overlay = document.querySelector('.overlay');
  var closePictureBtn = bigPicture.querySelector('.big-picture__cancel');

  var closeBigPicture = function () {
    bigPicture.classList.add('hidden');
  };

  var onKeydownEsc = function (evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
      closeBigPicture();
    }
  };

  closePictureBtn.addEventListener('click', closeBigPicture);
  overlay.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onKeydownEsc);

})();

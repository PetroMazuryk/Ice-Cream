let pictures = Array.prototype.slice.call(
    document.getElementById('pictures').children
  ),
  leftArrow = document.getElementById('left-arrow'),
  rightArrow = document.getElementById('right-arrow'),
  speedGallery = 5000,
  currentSlideGallery = 0,
  currentActiveGallery = 0,
  timerGallery;

window.onload = () => {
  const playSlide = slide => {
    if (slide < 0) slide = currentSlide = reviews.length - 1;

    if (currentActive != currentSlide)
      reviews[currentActive].classList.add('review_inactive');

    currentActive = currentSlide;
  };

  const playSlideGallery = slide => {
    for (let k = 0; k < pictures.length; k++) {
      pictures[k].classList.remove('picture_active');
      pictures[k].classList.remove('picture_inactive');
    }
    if (slide < 0) slide = currentSlideGallery = pictures.length - 1;
    if (slide > pictures.length - 1) slide = currentSlideGallery = 0;
    if (currentActiveGallery != currentSlideGallery)
      pictures[currentActiveGallery].classList.add('picture_inactive');
    pictures[slide].classList.add('picture_active');

    currentActiveGallery = currentSlideGallery;

    clearTimeout(timerGallery);
    timerGallery = setTimeout(() => {
      playSlideGallery((currentSlideGallery += 1));
    }, speedGallery);
  };

  leftArrow.addEventListener('click', function () {
    playSlideGallery((currentSlideGallery -= 1));
  });
  rightArrow.addEventListener('click', function () {
    playSlideGallery((currentSlideGallery += 1));
  });

  playSlideGallery(currentSlideGallery);
};

function maxHeight() {
  let blocks = document.getElementsByClassName('review__text-block'),
    height = 0;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].offsetHeight > height) {
      height = blocks[i].offsetHeight;
    }
  }

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.height = height + 'px';
  }
}

$(document).ready(function () {
  $('.header__login').on('click', function (e) {
    e.preventDefault();
    $('.modal').addClass('modal--active');
  });

  $('.modal__close').on('click', function () {
    $('.modal').removeClass('modal--active');
  });

  $('.modal__overlay').on('click', function (e) {
    if ($(e.target).hasClass('modal__overlay')) {
      $('.modal').removeClass('modal--active');
    }
  });
});

$(function () {
  const $wrapper = $('.slider__wrapper');
  const $dots = $('.slider__dot');
  const slideCount = $('.slider__item').length;
  let currentIndex = 0;

  function goToSlide(index) {
    const offset = -index * 100 + '%';
    $wrapper.css('transform', 'translateX(' + offset + ')');
    currentIndex = index;
    updateDots();
  }

  function updateDots() {
    $dots.removeClass('active');
    $dots.eq(currentIndex).addClass('active');
  }

  $dots.on('click', function () {
    const index = $(this).data('slide');
    goToSlide(index);
  });

  setInterval(function () {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
  }, 4000);
});


  
 $(document).ready(function () {
  $('.slider__expand-button').on('click', function () {
    $('.slider__hidden-content').toggleClass('slider__hidden-content--visible');
    $('.slider__button-wrapper').toggleClass('slider__button-wrapper--moved');
    $('.slider__arrow').toggleClass('slider__arrow--rotated');
  });
});




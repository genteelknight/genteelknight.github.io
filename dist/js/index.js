(function () {
  'use strict';

  // Init Swiper
  var sliderOptions = {
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper-pagination'
  },
    sliderQuery = '.swiper-container';
  var mySwiper = new Swiper (sliderQuery, sliderOptions);

})();

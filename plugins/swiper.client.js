import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

export default ({ app }) => {
    app.swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            860: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1264: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },

        },
    });
  };

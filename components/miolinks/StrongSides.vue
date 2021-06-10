<template>
  <section class="section-strong-sides">
    <v-container>
      <v-row class="justify-center align-center">
        <v-col class="col-lg-6">
          <v-img
              data-depth="0.065"
              class="layer"
              lazy-src="/assets/img/miolinks/strong-sides/strong-sides.svg"
              src="/assets/img/miolinks/strong-sides/strong-sides.svg"
              max-height="434"
              max-width="654"
              content-class="hero-main-img"
              contain
          ></v-img>
        </v-col>
        <v-col class="col-lg-6">
          <h2 class="section-title">
            What are our strong sides?
          </h2>
          <div class="strong-sides-slider">
            <client-only>
              <div class="slider-wrapper">
                <swiper class="swiper1" ref="mySwiper" :options="swiperOptions">
                  <swiper-slide class="custom-slide" v-for="strongSideItem in strongSideSlider" :key="strongSideItem.id">
                    <div class="slide-content">
                      <h3 class="slide-content__title">
                        <button type="button" class="arrow-back"></button>
                        {{ strongSideItem.title }}
                        <button type="button" class="arrow"></button>
                      </h3>
                      <p class="slide-content__text">
                        {{ strongSideItem.text }}
                      </p>
                    </div>
                    <div class="slide-nav">
<!--                      <span class="line"></span>-->
                      <img :src="strongSideItem.url" alt="">
                      <div class="slide-nav__counter">
                        <div class="unfiled-custom-btn slider-counter">
                          {{ strongSideItem.number }}
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <div class="swiper-scrollbar"></div>
                  <swiper-scrollbar/>
                </swiper>
              </div>
            </client-only>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

import VueAwesomeSwiper from "vue-awesome-swiper";


export default {
  data() {
    return {
      swiperOptions: {
        scrollbar: { el: '.swiper-scrollbar' },
        effect: 'fade',
        navigation: {
          nextEl: '.arrow',
          prevEl:'.arrow-back'
        },
      },
      strongSideSlider: {
        1: {
          id: 1,
          title: 'Simplicity of using',
          number: '1/3',
          url: '/assets/img/miolinks/line-1.svg',
          text:'You no longer need to create hundreds of pages with strange scripts on many servers, whose IP addresses will be blacklisted after a couple of advertising campaigns. Machine learning helps in filtering bots and protects your sites from low-quality traffic and fraud.',
        },
        2: {
          id: 2,
          title: 'Self-learning system',
          number: '2/3',
          url: '/assets/img/miolinks/line-2.svg',
          text:'Our self-learning system quickly responds to various changes, which guarantees the security of your advertising campaigns. Paying with cryptocurrency helps prevent financial censorship. You just need to register on our service, which will take a few minutes of your time.',
        },
        3: {
          id: 3,
          title: 'Continuous self-improvement',
          number: '3/3',
          url: '/assets/img/miolinks/line-3.svg',
          text:'We use only modern and high-tech solutions to filter out malicious traffic. Each session is examined by hundreds of parameters. Our service improves the quality of filtering every day thanks to continuous training with the help of neural networks.',
        },
      },
    }
  }
}

</script>

<style scoped lang="scss">

@import "assets/scrollbar.scss";

.section-strong-sides {
  padding: 87px 0 ;
}

.v-image {
  margin-left: -40px;
}


.slide-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: not-allowed;
  margin-top: 20px;
  &-scrolbar {
    width: 325px;
    height: 6px;
  }
}

.slider-counter {
  width: 51px;
  margin-top: 0;
}

.slider-counter {
  padding: 0;
  text-align: center;
  padding: 14px 0;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.015em;
  color: #3E002C;
  margin: 0 auto 0;
}



.slide-content {
  cursor: pointer;
  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 135%;
    color: #FF9B8E;
    padding-right: 60px;
    padding-left: 60px;
    position: relative;
    display: inline-block;

    .arrow {
      display: block;
      width: 30px;
      height: 10px;
      background: url(./assets/miolinks/r-arrow.svg);
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.3s ease;
      &:hover {
        transform: translateY(-50%)scale(1.05);
      }
    }
    .arrow-back {
      display: block;
      width: 31px;
      height: 10px;
      background: url(./assets/miolinks/r-arrow.svg);
      left: 0;
      top: 50%;
      transform: translateY(-50%) rotate(-180deg);
      position: absolute;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        transform: translateY(-50%) rotate(-180deg)scale(1.05);
      }
    }
  }
}
.slide-content__title {
  color: #E08D8D;
}

.slide-content {

  &__title {
    margin-top: 60px;
  }

  &__text {
    font-size: 16px;
    line-height: 135%;
    color: #27295A;
    margin-top: 30px;
    max-width: 540px;
    width: 100%;
  }
}

.section-title {
  color: #3E002C;
}

//.swiper-slide-next, .swiper-slide-prev {
//  opacity: 0!important;
//}

.swiper-slide.custom-slide {
  opacity: 0!important;
}

.swiper-slide.custom-slide.swiper-slide-active {
  opacity: 1!important;
}

@media (max-width: 1264px) {
  .v-image {
    margin: 0 auto 30px;
  }

  .strong-sides-slider {
    max-width: 489px;
    width: 100%;
    margin: 0 auto;
  }

  .section-title {
    text-align: center;
  }
}

</style>

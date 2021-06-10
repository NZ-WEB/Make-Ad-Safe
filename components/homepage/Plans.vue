<template>
  <div class="section-plans">
    <v-container>
      <v-row>
        <v-col class="col">
          <h2 class="section-title">Tariff plans</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col">
          <client-only>
            <div class="swiper-buttons-wrapper">
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
            <swiper ref="mySwiper" :options="swiperOptions">

              <swiper-slide>
                <div class="tariff">
                  <div class="tariff__top">
                    <h3 class="tariff-content__top-title">Starter</h3>
                  </div>
                  <div class="tariff__main">
                    <div class="tariff-price">
                      <h3 class="tariff-price__main">
                        <span class="tariff-price__valute">$</span> 300/ month
                      </h3>
                      <p class="tariff-price__description">20 GB plan</p>
                      <ul class="tariff-options">
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                      </ul>
                      <button
                          type="button"
                          class="tariff-btn custom-button"
                          v-ripple
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="tariff">
                  <div class="tariff__top">
                    <h3 class="tariff-content__top-title">Medium</h3>
                  </div>
                  <div class="tariff__main">
                    <div class="tariff-price">
                      <h3 class="tariff-price__main">
                        <span class="tariff-price__valute">$</span> 300/ month
                      </h3>
                      <p class="tariff-price__description">20 GB plan</p>
                      <ul class="tariff-options">
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                      </ul>
                      <button
                          type="button"
                          class="tariff-btn custom-button"
                          v-ripple
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="tariff">
                  <div class="tariff__top">
                    <h3 class="tariff-content__top-title">Ultimate</h3>
                  </div>
                  <div class="tariff__main">
                    <div class="tariff-price">
                      <h3 class="tariff-price__main">
                        <span class="tariff-price__valute">$</span> 300/ month
                      </h3>
                      <p class="tariff-price__description">20 GB plan</p>
                      <ul class="tariff-options">
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                      </ul>
                      <button
                          type="button"
                          class="tariff-btn custom-button"
                          v-ripple
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="tariff">
                  <div class="tariff__top">
                    <h3 class="tariff-content__top-title">Complex</h3>
                  </div>
                  <div class="tariff__main">
                    <div class="tariff-price">
                      <h3 class="tariff-price__main">
                        <span class="tariff-price__valute">$</span> 300/ month
                      </h3>
                      <p class="tariff-price__description">20 GB plan</p>
                      <ul class="tariff-options">
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                      </ul>
                      <button
                          type="button"
                          class="tariff-btn custom-button"
                          v-ripple
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="tariff">
                  <div class="tariff__top">
                    <h3 class="tariff-content__top-title">Master</h3>
                  </div>
                  <div class="tariff__main">
                    <div class="tariff-price">
                      <h3 class="tariff-price__main">
                        <span class="tariff-price__valute">$</span> 300/ month
                      </h3>
                      <p class="tariff-price__description">20 GB plan</p>
                      <ul class="tariff-options">
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                      </ul>
                      <button
                          type="button"
                          class="tariff-btn custom-button"
                          v-ripple
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="tariff">
                  <div class="tariff__top">
                    <h3 class="tariff-content__top-title">Professional</h3>
                  </div>
                  <div class="tariff__main">
                    <div class="tariff-price">
                      <h3 class="tariff-price__main">
                        <span class="tariff-price__valute">$</span> 300/ month
                      </h3>
                      <p class="tariff-price__description">20 GB plan</p>
                      <ul class="tariff-options">
                        <li class="tariff-options__item">
                          <v-icon> mdi-check</v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                        <li class="tariff-options__item">
                          <v-icon
                          >
                          mdi-check
                          </v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                        <li class="tariff-options__item">
                          <v-icon
                          >
                            mdi-check
                          </v-icon>
                          <p class="tariff-options__item-text">
                            Lorem ipsum dolor sit eiusmo
                          </p>
                        </li>
                      </ul>
                      <button
                          type="button"
                          class="tariff-btn custom-button"
                          v-ripple
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </client-only>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col">
          <p class="plans-description">
            We offer unlimited connections for all packages. All prices may be
            subject to change according to different use cases. Please note
            <a href="#">
              that you can test any type of proxy for free
              <v-icon color="#4794EF">mdi-arrow-right</v-icon>
            </a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
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
      }
    }
  }
}
</script>

<style>

.swiper-buttons-wrapper {
  position: relative;
}

.swiper-button-next, .swiper-button-prev {
  top: 200px;
}

@media (max-width: 390px) {
  .swiper-button-next, .swiper-button-prev {
    top: 450px;
  }
}
</style>

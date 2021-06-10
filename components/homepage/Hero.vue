<template>
  <div class="hero-section">
    <v-container>
      <v-row
          class="align-center justify-center justify-lg-space-between"
      >
        <v-col class="col-12 col-md-6 order-1 order-lg-0" data-aos="zoom-in-left">
          <div class="hero-content">
            <h1 class="hero-content__title">
              Make Ad Safe and Easy with us
            </h1>
            <p class="hero-content__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <button
                type="button"
                class="hero-content__btn custom-button"
                v-ripple
            >
              Learn more
            </button>
          </div>
        </v-col>
        <v-col class="col-12 col-md-6" data-aos="zoom-in-right">
          <div id="scene1">
            <v-img
                data-depth="0.065"
                class="layer"
                lazy-src="/assets/img/hero-image-1.png"
                src="/assets/img/hero-image-1.png"
                max-height="436"
                max-width="563"
                content-class="hero-main-img"
                contain
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

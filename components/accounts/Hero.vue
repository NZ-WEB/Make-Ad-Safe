<template>
  <div class="hero-section">
    <v-container>
      <v-row
          class="align-center justify-center justify-lg-space-between justify-xl-center"
      >
        <v-col class="col-12 col-md-6 col-xl-4 order-1 order-lg-0" data-aos="zoom-in-left">
          <div class="hero-content">
            <h1 class="hero-content__title">
              Ad & Account management
            </h1>
            <p class="hero-content__text">
              User-friendly interface, a wide range of functionality, simplicity in management. Everything you need is in one place! No dependence on the time of day or day of the week. Keep an eye on a fresh data about your advertising
            </p>
            <button
                type="button"
                class="hero-content__btn custom-button custom-button_red-grad"
                v-ripple
            >
              Learn more
            </button>
          </div>
        </v-col>
        <v-col class="col-12 col-md-6 col-xl-4 col-xl-j" data-aos="zoom-in-right">
          <div id="scene1">
            <v-img
                data-depth="0.065"
                class="layer main-img"
                lazy-src="/assets/img/accounts/hero/main.svg"
                src="/assets/img/accounts/hero/main.svg"
                max-height="494"
                max-width="568"
                content-class="hero-main-img"
                contain
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<!--Warning! This styles must be used only with attr "scoped"-->

<style scoped lang="scss">

.main-img {
  transform: scale(1.09);
}

.hero-content {
  &__title {
    font-family: Bitter;
    font-style: normal;
    font-weight: 600;
    font-size: 53px;
    line-height: 66px;
    letter-spacing: 0.015em;
    color: #27295A;
  }

  &__text {
    font-weight: normal;
    font-size: 16px;
    line-height: 135%;
    color: #27295A;
  }
}

.v-image {
  margin: 0 -30px 0 auto;
}

</style>

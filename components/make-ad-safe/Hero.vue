<template>
  <div class="hero-section">
    <v-container>
      <v-row
          class="align-center justify-center justify-lg-space-between"
      >
        <v-col class="col-12 col-md-6 order-1 order-lg-0" data-aos="zoom-in-left">
          <div class="hero-content">
            <h1 class="hero-content__title">
              Reliable protection against fraud
            </h1>
            <p class="hero-content__text">
              You will no longer have to spend time fiddling with the quality of links. We have developed a professional product, which will help take your advertising campaign to a new level!
            </p>
            <button
                type="button"
                class="hero-content__btn custom-button custom-button_purpule-grad"
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
                class="layer main-img"
                lazy-src="/assets/img/make-ad-safe/hero/main.svg"
                src="/assets/img/make-ad-safe/hero/main.svg"
                max-height="374"
                max-width="474"
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

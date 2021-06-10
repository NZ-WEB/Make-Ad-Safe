<template>
  <div class="section-about" id="section-about">
    <div class="container">
      <v-row class="align-center flex-column flex-md-row">
        <v-col class="col-lg-6">
          <v-btn
            elevation="0"
            icon
            class="about-click-btn"
            data-aos="zoom-in-left"
            ><img src="/assets/img/about-touch-icon.svg" alt="" />
          </v-btn>
          <div id="scene2">
            <v-img
              data-depth="0.065"
              class="layer"
              lazy-src="/assets/img/about-img-1.png"
              src="/assets/img/about-img-1.png"
              max-height="468"
              max-width="528"
              content-class="about-main-img"
              contain
            >
            </v-img>
          </div>
        </v-col>
        <v-col class="col-lg-6">
          <div class="about-content">
            <h2 class="about-content__title section-title">
              About mobile proxies
            </h2>
            <p class="about-content__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="about-content__text">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p class="about-content__text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <button
              type="button"
              class="about-content__btn custom-button"
              v-ripple
            >
              Learn more
            </button>
            <ul class="about-content__advant-list d-flex justify-space-between">
              <li
                class="about-content__advant-item"
                v-for="item in advantages"
                :key="item.id"
              >
                <span class="about-content__advant-number">
                  {{ item.number }}
                </span>
                <p class="about-content__advant-text">
                  {{ item.text }}
                </p>
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      advantages: {
        1: {
          id: 1,
          number: 21,
          text: "Lorem ipsum  labore et dolore",
        },
        2: {
          id: 2,
          number: 33,
          text: "Lorem ipsum  labore et dolore",
        },
        3: {
          id: 3,
          number: 12,
          text: "Lorem ipsum  labore et dolore",
        },
      },
    };
  },
};
</script>
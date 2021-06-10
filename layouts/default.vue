<!-- { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap' },-->

<template>
  <v-app>
    <Header />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>

<style lang="scss">
body,
main,
footer {
  font: 400 16px "Bitter", serif;
  color: #27295a !important;
  overflow-y: hidden;
}

a {
  text-decoration: none;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  width: 100%;
}

h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}

h3 {
  font-weight: 400!important;
}



button {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  border: none;
  white-space: nowrap;
  background-image: none;
  line-height: inherit;
  font-size: inherit;
  padding: 0;
  margin: 0;
  min-width: 0;
  height: auto;
  width: auto;
  border-radius: 0;
  -webkit-appearance: none;
  cursor: pointer;
  outline: none;
  border-spacing: 0;
  text-indent: 0;
  color: inherit;
  background-color: transparent;
}

button,
button:hover,
button:focus {
  outline: none;
}

.v-main__wrap {
  padding-top: 150px;
}

.asd {
  border: 1.5px solid transparent;
  border-image: linear-gradient(
    to top,
    #703edb 0%,
    #439af0 62.68%,
    #30d6e3 100%
  );
}

.unfield-custom-btn span {
  color: #27295a !important;
}

.app-bar-nav-list__item button,
.app-bar-nav-list .v-list-item__title,
.langs-btn {
  font-family: Bitter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #27295a;
  text-transform: capitalize;
}

.langs-name button span {
  font: 400 16px "Bitter", serif;
}

.section-title,
h2 {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: #27295a;
}

.swiper-button-next,
.swiper-button-prev {
  outline: none;
}

.swiper-button-next::after {
  content: "next";
  transform: scale(0.5);
}

.swiper-button-prev::after {
  transform: scale(0.5);
}

.section-title_center {
  text-align: center;
}

.unfield-custom-btn {
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    transform: scale(1.05);
  }

}

.theme--light.v-list {
  background: #FFF !important;
}

.custom-button {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.015em;
  color: #ffffff;
  padding: 16px 50px;
  background: linear-gradient(
      75.36deg,
      #703edb -5.23%,
      #439af0 69.87%,
      #30d6e3 114.59%
    ),
    #c4c4c4;
  box-shadow: -10px 10px 30px rgba(73, 119, 238, 0.25);
  border-radius: 5px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  display: block;
}

.custom-button:hover {
  box-shadow: none;
  opacity: 0.7;
  color: #fff;
  transform: scale(1.05);
}

.burger-btn {
  margin: 0 0 0 auto;
}

.logo-link__image {
  transition: all 0.5s ease;
  transform: scale(0.92);
}

.logo-link__image:hover {
  transform: scale(1);
}

/* Сustoming buttons */

/* Draver Content */

.draver-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: -4px 4px 40px rgba(0, 5, 125, 0.16);
}

.v-toolbar__content {
  z-index: 50;
}

.d-lg-none
  .v-navigation-drawer
  .v-navigation-drawer--absolute
  .v-navigation-drawer--is-mobile
  .v-navigation-drawer--open {
  z-index: 99999999;
}

.v-navigation-drawer__content {
  z-index: 999999;
}

.draver-menu-title {
  padding: 0 32px;
  margin-bottom: 30px;
}

.draver-content {
  padding: 160px 40px;
  position: fixed;
  width: 100%;
  text-align: center;
}

.draver-content-list__item .v-list-item__title,
.draver-content .v-btn__content {
  font: 400 22px "Bitter", serif;
}

.draver-content-list__item {
  margin-bottom: 15px;
}

.v-btn__content {
  font-size: 16px;
  text-transform: capitalize;
}

/* Hero Section */

.hero-section {
  padding-bottom: 115px;
}

.hero-content__title {
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 1.2em;
  letter-spacing: 0.015em;
  max-width: 495px;
  width: 100%;
  margin-bottom: 35px;
}

.hero-content__text {
  font-weight: normal;
  font-size: 16px;
  line-height: 135%;
  max-width: 466px;
  width: 100%;
  margin-bottom: 35px !important;
}


/* Footer  */

.v-footer {
  padding: 125px 0 115px;
  background: #fff !important;
  box-shadow: none;
}

.footer-copy {
  font-weight: normal;
  font-size: 16px;
  line-height: 135%;
  color: rgba(39, 41, 90, 0.4);
  max-width: 173px;
}

.theme--light.v-list {
  background: transparent;
}

.v-application .primary--text {
  background: #fff;
}

.v-list-item__title {
  text-transform: capitalize;
}

.location-title,
.email-title {
  max-width: 150px;
}

.title_ml5 {
  margin-left: 5px;
}

.networks {
  padding-left: 16px;
  padding-top: 0;
  max-width: 220px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.networks .v-list-item {
  padding: 0;
}

.footer-nav-title {
  text-transform: capitalize;
  font-weight: 600 !important;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.015em;
  padding: 0 16px;
  color: #27295a;
}

.contact-list__item:last-child {
  padding-left: 30px;
}

.footer-logo {
  margin-top: 16px;
}

.v-list {
  padding: 0;
}

.location-link {
  display: block;
  margin: 15px 0;
  padding-left: 16px;
}

.location-title,
.email-title,
.phone-title {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.015em;
  color: #27295a;
}



@media (max-width: 1264px) {

  .footer-nav-title {
    margin: 0 auto;
  }
}

@media (max-width: 961px) {

  .footer-copy, .footer-logo {
    margin: 15px auto 0;
  }

  .v-application .align-center {
    padding: 0;
  }
  .hero-content__btn {
    margin: 0 auto;
  }

  .countries {
    margin: 0 auto;
  }

  .calculating-select-text {
    max-width: 300px;
    margin: 38px auto 0;
  }

  .hero-content__text {
    text-align: center;
    margin: 0 auto 35px;
  }

  .hero-content__title {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-content {
    margin-top: 35px;
  }

  #scene1 .v-image {
    margin: 0 auto;
  }

  h2,
  p {
    text-align: center;
  }

  .footer .app-bar-nav-list {
    text-align: center;
  }

  footer .app-bar-nav-list__item button {
    margin: 0 auto;
  }

  footer .v-btn:not(.v-btn--round).v-size--default {
    margin: 0 auto;
  }

  footer .v-sheet.v-list:not(.v-sheet--outlined) {
    margin: 0 auto;
  }

  footer .v-list-item .v-list-item__subtitle,
  footer .v-list-item .v-list-item__title {
    text-align: center;
  }

  .v-application .align-center {
    margin: 0 auto;
    text-align: center;
  }

}

@media (max-width: 574px) {

  h2 {
    font-size: 28px;
  }

  p {
    font-size: 16px;
  }

  .hero-content__title {
    font-size: 40px!important;
  }

}

@media (max-width: 390px) {

  .section-compinsation .section-title {
    margin-top: 250px;
  }
}

@media (max-width: 370px) {
  .v-btn__content {
    max-width: 300px;
  }
}

@media (max-width: 320px) {
  .card-item__img {
    width: 70%;
  }
}
</style>

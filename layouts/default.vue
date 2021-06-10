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

<style>
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
  padding-top: 120px;
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

.unfield-custom-btn {
  border-radius: 5px;
  font-style: normal;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.015em;
  text-transform: capitalize;
  margin: 5px;
}

.unfield-custom-btn:hover {
  transform: scale(1.05);
}

.unfield-custom-btn-grad {
  border: 2px solid transparent;
  -moz-border-image: -moz-linear-gradient(
    #703edb 100%,
    #439af0 100%,
    #30d6e3 100%
  );
  -webkit-border-image: -webkit-linear-gradient(
    #703edb 100%,
    #439af0 100%,
    #30d6e3 100%
  );
  border-image: linear-gradient(#703edb 100%, #439af0 100%, #30d6e3 100%);
  border-image-slice: 1;
  border-radius: 5px !important;
}

.unfield-custom-btn span {
  color: #27295a !important;
}

.btn-unfield-wrapper {
  border-radius: 5px;
  max-width: 190px;
  width: 100%;
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

.langs-menu {
  box-shadow: -4px 4px 40px rgba(0, 5, 125, 0.16);
  border-radius: 5px;
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
}

.logo-link__image:hover {
  transform: scale(1.1);
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

/* Section Info */

.section-info {
  background: #f2f8ff;
  padding: 115px 0;
}

.card-item {
  padding: 15px 24px;
  border-radius: 10px !important;
  box-shadow: -4px 4px 40px rgba(0, 5, 125, 0.16);
  transition: all 0.4s ease;
  cursor: pointer;
  width: 95%;
  margin-top: 14px;
  margin: 14px;
  border: none !important;
}

.card-item:hover {
  box-shadow: none;
  transform: scale(0.995);
}

.card-item__title {
  font-weight: 400;
  font-size: 20px;
  line-height: 120.5%;
  color: #ea8e70;
  padding-left: 15px;
  padding-top: 15px;
}

.card-item__text {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 135%;
  color: #27295a;
}

.card-item__text_bold {
  font-weight: bold;
}

/* Section Choosing */

.section-choosing {
  padding: 115px 0 40px;
}

.v-application a {
  font-weight: 600;
}

.choosing-animation__main-icon {
  display: block;
  position: absolute;
  top: 68px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.4s ease;
}

.choosing-animation {
  max-width: 292px;
  position: relative;
  margin: 0 auto;
}

.bg-num {
  font-size: 250.027px;
  line-height: 135%;
  text-align: center;
  color: #f2f8ff;
  position: relative;
}

.choosing-animation__description {
  text-align: center;
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}

.choosing-list__item {
  max-width: 290px;
}

.choosing-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.theme--light.v-expansion-panels .v-expansion-panel::after {
  display: none;
}

/* Section About */

.section-about {
  padding: 115px 0;
}

.about-content__title {
  margin-bottom: 45px;
}

.about-click-btn {
  z-index: 1;
}

.about-content {
  margin-left: 35px;
}

.about-content__btn {
  margin-top: 35px;
}

.about-content__advant-item {
  max-width: 121px;
  width: 100%;
  text-align: center;
}

.about-content__advant-number {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 135%;
  color: #ea8e70;
  margin-bottom: 5px;
}

.about-content__advant-text {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 135%;
  text-align: center;
  color: #27295a;
}

.about-content__advant-list {
  margin-top: 45px;
}

.layer {
  position: relative;
}

/* Section graphs */

.section-graphs {
  padding: 115px 0;
  background: #f2f8ff;
  overflow: hidden;
}

.grphs-card-description {
  padding: 0 24px;
}

.section-graphs .v-expansion-panel {
  margin: 17.2px;
  border-radius: 10px;
  box-shadow: -4px 4px 40px rgba(0, 5, 125, 0.16);
  padding: 25px 0;
}

.section-graphs .v-expansion-panel:before {
  box-shadow: none;
}

.main-graph-wrapper {
  padding: 20px;
}

.main-graph-title {
  font-weight: 300;
  font-size: 28px;
}

.main-graph-subtitle {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
}

.main-graph-wrapper {
  border-radius: 5px;
  position: absolute!important;
  bottom: -107px;
  right: -117px;
  z-index: 2;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}

.graphs {
  position: relative;
}

.section-graphs .v-sheet.v-card:not(.v-sheet--outlined) {
  width: 100%;
  max-width: 419px;
}

.custom-table {
  padding-bottom: 54px;
}

.v-data-table-header span {
  color: #27295a;
  font-weight: 600 !important;
  font-size: 16px;
}

.graphs-bg-img {
  margin: 50px 0 0 auto;
}

/* Section plans */

.section-plans {
  padding: 115px 0;
}

.swiper-button-next,
.swiper-button-prev {
  background-color: white;
  background-color: rgba(255, 255, 255, 0.5);
  right: 10px;
  padding: 30px;
  color: #000 !important;
  fill: black !important;
  stroke: black !important;
}

.tariff {
  max-width: 336px;
  width: 100%;
  background: #ffffff;
  box-shadow: -4px 4px 20px rgba(0, 5, 125, 0.1);
  border-radius: 8px;
  padding-bottom: 45px;
  margin: 20px auto;
}

.tariff__top {
  text-align: center;
  padding: 40px 0 20px;
  background: #f2f8ff;
  border-radius: 8px 8px 0px 0px;
}

.tariff-options__item {
  display: flex;
  justify-content: center;
}

.tariff-options__item-text {
  margin-left: 10px;
  margin-top: 12px;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.prev-btn {
  left: -70px;
}

.next-btn {
  right: -70px;
}

.tariff-options,
.tariff-price {
  text-align: center;
  padding: 0;
  margin-top: 26px;
}

.v-application ul {
  padding: 0;
}

.section-plans .v-application p {
  margin: 0 0 0 12px;
}

.v-application p {
  margin-bottom: 0;
}

.tariff-btn {
  margin: 30px auto 0;
}

.tariff-item {
  border: none;
  border-radius: 9px !important;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: -4px 4px 20px rgba(0, 5, 125, 0.06);
}

.tariff-content {
  width: 100%;
  max-width: 336px;
}

.tariff-content__top-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 135%;
  color: #4794ef;
  margin: 0 auto;
}

.tariff-price__main {
  position: relative;
  display: inline-block;
}

.tariff-price__valute {
  position: absolute;
  top: -10px;
  left: -15px;
}

.plans-description,
.plans-description span {
  font-weight: normal;
  font-size: 16px;
  line-height: 175%;
  text-align: center;
  color: #27295a;
  text-transform: initial;
}

.plans-description span {
  font-weight: 600;
  font-size: 16px;
  line-height: 135%;
  text-align: center;
  color: #4794ef;
}

.plans-description .v-btn:not(.v-btn--round).v-size--default {
  padding: 0 5px;
  height: auto;
  letter-spacing: inherit;
}

.plans-description {
  max-width: 546px;
  width: 100%;
  margin: 30px auto 0;
}

/* Section Calculating */

.section-calculating {
  padding-bottom: 115px;
}

.section-calculating .section-title {
  margin-bottom: 45px;
}

.section-calculating-description {
  margin-bottom: 18px !important;
}

.step-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 135%;
  color: #ea8e70;
  margin-bottom: 30px;
  margin-left: 20px;
}

.countries__item {
  max-width: 37px;
  margin: 10px 7.5px;
}

.countries {
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  width: 70%;
  justify-content: center;
}

.calculating-select-text {
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.015em;
  color: #27295a;
  margin: 38px 0 25px;
  padding-left: 20px;
  position: relative;
  margin-left: 20px;
}

.calculating-radio-grup {
  margin-left: 10px;
}

.theme--light.v-label {
  color: inherit;
}

.v-messages {
  display: none;
}

.calculating-select-text::before {
  content: "";
  position: absolute;
  top: -5px;
  left: 0;
  background: url(/assets/img/countries/l-star.svg);
  width: 11px;
  height: 11px;
}

.countries-next-btn {
  padding: 0 40px;
}

.countries-next-btn-wrapper {
  max-width: 190px;
  width: 100%;
  margin-top: 30px;
  margin-left: 20px;
}

.v-stepper,
.v-stepper__header,
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none !important;
}

.section-plans .v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: -4px 4px 15px rgba(0, 5, 125, 0.1);
}

.v-stepper__content {
  padding: 5px 45px 49px;
}

.v-stepper {
  box-shadow: -4px 4px 40px rgba(0, 5, 125, 0.16) !important;
  border-radius: 8px !important;
  max-width: 470px;
  margin: 0 0 0 auto;
}

.step-1 .v-application p {
  margin-left: 20px !important;
}

.calculating-select-text_second {
  margin-top: 30px;
  margin-left: 20px !important;
}

.calculating-radio-grup_flex .v-radio {
  max-width: 100px;
  width: 100%;
}

.calculating-radio-grup_flex .v-input--radio-group__input {
  display: flex;
  flex-direction: row!important;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 270px;
  align-items: center;
}

.v-stepper__items {
  background: url(/assets/img/calculate-bg.svg) no-repeat bottom right / cover;
}

/* Section Partners */

.section-partners {
  padding: 115px 0;
  background: #f2f8ff;
}

.partners-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.partners-item {
  max-width: 93px;
  width: 100%;
  margin: 0 35px;
}

.section-partners .theme--light.v-sheet {
  background: transparent;
}

.section-partners-description {
  margin-top: 40px;
}

/* Section Compinsation & Section register */

.section-compinsation {
  padding: 115px 0;
  overflow: hidden;
}

.register-content__btn,
.compinsation-content__btn,
.questions-faq-content__btn {
  text-transform: capitalize;
}

.section-compinsation .section-title,
.section-register .section-title,
.section-questions-faq .section-title {
  max-width: 535px;
  margin: 0 auto;
}

.questions-wrapper {
  width: 100%;
  height: 100px;
  background: #f2f8ff;
}

.compinsation-content__text,
.register-content__text,
.questions-faq-content__text {
  margin: 45px auto 35px !important;
  max-width: 726px;
  width: 100%;
}

.compinsation-content,
.register-content,
.questions-faq-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  width: 100%;
}

.compinsation-content__btn,
.register-content__btn,
.questions-faq-content__btn {
  margin: 0 auto;
}

.compinsation-wrapper,
.register-wrapper,
.questions-faq-wrapper {
  position: relative;
}

.section-compinsation .v-image__image,
.section-register .v-image__image,
.section-questions-faq .v-image__image {
  opacity: 0.15;
}

.question-panel {
  max-width: 635px !important;
  width: 100%;
  position: absolute !important;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
}

.question-panel .v-expansion-panel-header {
  padding: 35px 40px;
  border-radius: 10px !important;
  box-shadow: -4px 4px 40px rgba(0, 5, 125, 0.16);
}

.v-expansion-panel:before {
  box-shadow: none!important;
}

.question {
  background: #f2f8ff;
}

.questions-modal {
  z-index: 55555555;
}

.card-item__title_modal {
  padding: 35px 40px 30px;
}

.questions-textarea {
  padding: 0 40px 30px;
}

.questions-madal-btn {
  margin: 0 0 0 auto;
}

.v-dialog > .v-card > .v-card__actions {
  padding: 0 40px 30px;
}

/* Footer  */

.v-footer {
  padding: 125px 0 115px;
  background: #f2f8ff !important;
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

/* FAQ page */

.page-title {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: #27295a;
  text-align: center;
}

.faq-page-title {
  text-transform: uppercase;
}

.plans-page-title {
  padding-top: 50px;
  margin-bottom: 10px;
}

.page-description {
  max-width: 466px;
  width: 100%;
  text-align: center;
  margin: 0 auto 15px !important;
}

.faq-search-wrapper {
  max-width: 730px;
  margin: 0 auto;
  position: relative;
}

.plans-buttons-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
}

.plans-btn {
  margin: 0 23px;
  max-width: 200px;
  width: 100%;
  min-width: 120px;
}

.faq-top
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot {
  border-radius: 8px;
}

.search-btn {
  position: absolute;
  right: 0;
  top: 0;
  max-width: 104px;
  width: 100%;
  background: #4794ef;
  border-radius: 0px 5px 5px 0px;
  height: 55px !important;
  filter: drop-shadow(-10px 10px 30px rgba(73, 119, 238, 0.25));
}

.faq-top .theme--light.v-btn.v-btn--has-bg {
  background-color: #4794ef;
}

.faq-question-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 135%;
  color: #ea8e70;
}

.faq-questions-list {
  max-width: 730px;
  width: 100%;
  box-shadow: -4px 4px 40px rgba(0, 5, 125, 0.16);
  border-radius: 10px;
  padding: 35px 40px;
  margin: 17.5px 0 !important;
}

.faq-questions-list .v-expansion-panel-content__wrap {
  padding: 15px 0 0 0 !important;
}

.faq-questions-list .v-expansion-panel-header {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.faq-main {
  padding-bottom: 52px;
}

.menuable__content__active {
  background: white;
}

.faq-top {
  padding: 40px;
}

@media (max-width: 1264px) {
  .section-plans .v-slide-group__wrapper {
    max-width: 680px;
  }

  .section-plans .v-item-group {
    justify-content: center;
  }

  .footer-nav-title {
    margin: 0 auto;
  }
}

@media (max-width: 961px) {
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

  .main-graph-wrapper {
    position: initial;
    margin: 0 auto;
  }

  .section-graphs .v-expansion-panels {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
  }

  .graphs {
    margin-bottom: 20px;
  }

  h2,
  p {
    text-align: center;
  }

  .v-expansion-panel-content__wrap {
    color: #27295a;
    text-align: center;
  }

  .about-content__btn {
    margin: 35px auto 0;
  }

  .section-calculating .v-stepper {
    margin: 0 auto;
  }

  .section-calculating-description {
    max-width: 600px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  #scene2 {
    max-width: 528px;
    width: 100%;
    margin: 0 auto;
  }

  .about-content {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }

  .footer-logo {
    margin: 0 auto 20px;
  }

  .footer-copy {
    margin: 10px auto 0;
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

  .countries-next-btn-wrapper {
    margin: 30px auto 0;
  }

  .faq-question-title {
    text-align: center;
  }

  .v-application .align-center {
    margin: 0 auto;
    text-align: center;
  }

  .draver-content {
    padding-top: 60px;
  }

  .main-graph-wrapper {
    transform: translateX(50%);
    right: 50%!important;
  }

  .graphs-bg-img {
    display: none;
  }

  .graphs {
    padding: 120px 0;
  }
}

@media (max-width: 860px) {
  .section-plans .v-slide-group__wrapper {
    max-width: 330px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: 10%;
  }

  .step-title {
    text-align: center;
  }

  .calculating-radio-grup_flex .v-input--radio-group__input {
    margin: 0 auto;
  }

  .step-title {
    margin-left: 0;
  }
}

@media (max-width: 1500px) {
  .main-graph-wrapper {
    right: -30px;
  }
}

@media (max-width: 600px) {
  .partners-list {
    justify-content: center;
  }

  .partners-item {
    margin: 10px;
  }

  .card-item__img {
    width: 70%;
    margin: 0 auto;
  }

  .v-sheet.v-card {
    text-align: center;
  }

  .custom-button {
    padding: 16px 30px;
  }

  .plans-btn {
    padding: 16px 5px;
  }
}

@media (max-width: 574px) {
  .compinsation-wrapper,
  .register-wrapper,
  .questions-faq-wrapper {
    margin-bottom: 40px;
  }

  .section-register,
  .questions-faq-wrapper {
    padding-bottom: 100px;
  }

  .hero-content__title {
    font-size: 40px;
  }

  .graphs {
    padding: 150px 0;
  }

  h2 {
    font-size: 28px;
  }

  .hero-section,
  .section-calculating {
    padding-bottom: 75px;
  }

  .section-info,
  .section-choosing,
  .section-about,
  .section-graphs,
  .section-plans,
  .section-partners,
  .section-compinsation {
    padding: 75px 0;
  }

  p {
    font-size: 16px;
  }

  .questions-wrapper {
    margin-top: 100px;
  }

  .main-graph-wrapper {
    transform: translate(50%, 50%);
    bottom: 50%;
  }
}

@media (max-width: 370px) {
  .compinsation-wrapper,
  .register-wrapper,
  .questions-faq-wrapper {
    margin-bottom: 80px;
  }


}

@media (max-width: 390px) {
  .card-item__title {
    font-size: 18px;
  }

  .bg-num {
    display: block;
    margin: 0 auto;
  }

  .v-expansion-panel-header {
    padding: 10px;
  }

  .compinsation-content,
  .register-content,
  .questions-faq-content {
    padding-bottom: 270px;
  }

  .section-compinsation .section-title {
    margin-top: 250px;
  }

  .faq-main {
    margin-bottom: 250px;
  }

  .custom-table-wrapper {
    margin-bottom: 250px;
  }

  .section-compinsation {
    padding-top: 170px;
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

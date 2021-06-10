<template>
  <div>
    <Hero />
    <Services />
  </div>
</template>

<script>
import Hero from '../components/make-ad-safe/Hero.vue'
import Services from '../components/make-ad-safe/Services.vue'


export default {
  name: 'makeAdSafe',
  components: {
    Hero,
    Services

  },
}
</script>

<style lang="scss">

.unfiled-custom-btn {
  display: block;
  font-weight: bold;
  font-size: 15px;
  line-height: 1.3em;
  letter-spacing: 0.025em;
  color: #320015;
  padding: 15px 0;
  position: relative;
  border: 2px solid transparent;
  border-radius: 5px;
  background: #FFF;
  background-clip: padding-box;
  padding: 14px 0;
  transition: all 0.4s ease;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(to right, #32A799 0%, #91E3DB 50%);
    content: '';
    z-index: -1;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  &:hover:before {
    transform: scale(1.006);
  }
}

.custom-button_green-grad {
  background: linear-gradient(79.41deg, #2A9D8F -5.73%, #60DFD0 79.89%, #BBE8E5 104.9%);
  box-shadow: -4px 6px 20px rgba(81, 205, 190, 0.27);
}

.unfield-custom-btn-grad {
  border: 2px solid transparent;
  -moz-border-image: -moz-linear-gradient(
          #32A799 100%,
          #8AE3D9 100%
  );
  -webkit-border-image: -webkit-linear-gradient(
          #32A799 100%,
          #8AE3D9 100%
  );
  border-image: linear-gradient(#32A799 100%, #8AE3D9 100%);
  border-image-slice: 1;

}

.custom-button_purpule-grad {
  background: linear-gradient(79.41deg, #832CEB -5.73%, #A4ACF8 104.9%);
  box-shadow: -4px 6px 20px rgba(81, 205, 190, 0.27);
}

.btn-unfield-wrapper {
  border-radius: 5px;
  max-width: 190px;
  width: 100%;
}

.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: 2px 2px 30px rgba(36, 82, 76, 0.15);
}

.questions-wrapper {
  background: #F1F9F8;
}

.v-footer {
  background: #fff !important;
}

.footer-nav-title, .contact-list__item span, .draver-menu-title {
  color: #27295A;
}

</style>

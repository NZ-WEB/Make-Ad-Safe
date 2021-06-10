<template>
  <section class="section-services">
    <v-container>
      <v-row>
        <v-col>
          <h2 class="section-title services-title">
            Our Services
          </h2>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col class="col-12 col-md-5 col-lg-4 mb-2 mb-lg-0" data-aos="zoom-in"
               v-for="(item, id) in services"
               :key="id"
        >
          <div class="service">
            <img :src="item.url" alt="" class="service__icon">
            <h3 class="service__title">
              {{ item.title }}
            </h3>
            <p class="service__text">
              {{ item.text }}
            </p>
            <nuxt-link :to="item.linkUrl" class="service__link">
              {{ item.linkText }} <v-icon color="#5E5BDE">mdi-arrow-right</v-icon>
            </nuxt-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

export default {
  data() {
    return {
      services: [
        {
          url: '/assets/img/make-ad-safe/services/1.svg',
          title: 'Advertising & Accounting',
          text: 'Organization and access management on most popular advertising platforms. Pre-seted payment methods for a quick start of your advertising.',
          linkUrl: '/',
          linkText: 'Learn more'
        },
        {
          url: '/assets/img/make-ad-safe/services/2.svg',
          title: 'SOCKS5 & HTTP Mobile Proxy',
          text: 'Top-quality mobile LTE proxies with a high level of trust. Configuration of a passive OS fingerprintand incredibly fast data transfer rate.',
          linkUrl: '/',
          linkText: 'Gain access'
        },
        {
          url: '/assets/img/make-ad-safe/services/3.svg',
          title: 'WEB & APP Development',
          text: 'Development and publishing of mobile applications for Android and iOS platforms. Full-stack WEB development using most popular frameworks.',
          linkUrl: '/',
          linkText: 'Coming soon'
        },
      ]
    }
  }
}

</script>

<style scoped lang="scss">

.section-services {
  padding: 115px 0;
  background: rgba(110, 139, 244, 0.08);
}

.services-title {
  text-align: center;
  margin-bottom: 60px;
}

.service {

  &:hover {
    box-shadow: -4px 4px 40px rgba(42, 0, 160, 0.13);
    border-radius: 13px;
    transform: scale(0.995);
  }

  margin: 0 auto;
  min-height: 440px;
  background: #FFFFFF;
  border-radius: 10px;
  width: 95%;
  padding: 21px 36px 35px;
  cursor: pointer;
  transition: all 0.2s ease;

  &__icon {
    display: block;
    margin: 0 auto;
  }

  &__title {
    font-weight: 600!important;
    font-size: 20px;
    line-height: 135%;
    text-align: center;
    color: #F59576;
    margin: 16px auto 20px;
    width: 65%;
  }

  &__text {
    font-weight: normal;
    font-size: 16px;
    line-height: 135%;
    text-align: center;
    color: #27295A;
  }

  &__link {
    font-family: Bitter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 135%;
    text-align: center;
    color: #5E5BDE;
    display: block;
    margin: 25px auto 0;
    opacity: 0.8;
    transition: all 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
}

@media (max-width: 960px ) {
  .service {
    width: 70%;
    padding: 21px 45px;
    &__icon {
      width: 35%;
    }
  }
}

@media (max-width: 576px ) {
  .section-services {
    padding: 75px 0;
  }
  .service {
    width: 90%;
    padding: 21px 45px;
    &__icon {
      width: 45%;
    }
    &__text {
      font-size: 14px;
    }
    &__title {
      font-size: 18px;
    }
    &__link {
      font-size: 18px;
    }
  }
}



</style>

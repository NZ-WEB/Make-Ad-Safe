<template>
  <section class="section-features">
    <v-container>
      <v-row>
        <v-col>
          <h2 class="section-title features-title">
            Our Services
          </h2>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col class="col-12 col-md-5 col-lg-4 mb-2 mb-lg-0" data-aos="zoom-in"
               v-for="(item, id) in features"
               :key="id"
        >
          <div class="features">
            <img :src="item.url" alt="" class="features__icon">
            <h3 class="features__title">
              {{ item.title }}
            </h3>
            <p class="features__text">
              {{ item.text }}
            </p>
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
      features: [
        {
          url: '/assets/img/accounts/features/1.svg',
          title: 'Instant traffic scaling',
          text: 'Increase the number of active AD accounts using our platform. Attract more targeted traffic in the shortest possible time!',
        },
        {
          url: '/assets/img/accounts/features/2.svg',
          title: 'Tier one countries only',
          text: 'Accounts of the best countries in the world with a high standard of living. Launch and use any GEO without the risk of blocking.',
        },
        {
          url: '/assets/img/accounts/features/3.svg',
          title: 'Connected payment method',
          text: 'All accounts have a local connected payment method. Moreover, the billing is already included in the price of each package!',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.section-features {
  padding: 115px 0;
  background: rgba(61, 180, 218, 0.08);
}

.features-title {
  text-align: center;
  margin-bottom: 60px;
}

.features {

  margin: 0 auto;
  background: transparent;
  border-radius: 10px;
  width: 95%;
  padding: 21px 36px 0px;
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
    color: #E63946;
    margin: 16px auto 20px;
    width: 65%;
  }

  &__text {
    font-weight: normal;
    font-size: 16px;
    line-height: 135%;
    text-align: center;
    color: #27295A;
    max-width: 500px;
    margin: 0 auto;
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

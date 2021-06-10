<template>
  <section class="section-tariffs">
    <v-container>
      <v-row class="align-center">
        <v-col
            cols="12"
            lg="7"
        >
          <div class="tariffs \" data-aos="zoom-in-right">
            <h2 class="section-title tariffs__title">
              Choose your tariff plan
            </h2>
            <p class="tariffs__text">
              We have taken care of our customers and introduced a trial tariff package so that you can test the
              operation of our service before purchasing. However, the number of trial packages is limited, so you
              should subscribe as soon as possible to get it.
            </p>
            <p class="tariffs__text">
              If you are ready to buy the package now, you can do so by clicking the button on the right. You also have
              the opportunity to fully
              <nuxt-link to="/" class="tariffs__link">
                customize the tariff package with the parameters you need
              </nuxt-link>
            </p>
          </div>
        </v-col>
        <v-col
            cols="12"
            lg="5"
        >
          <div class="tariff">
            <div class="tariff__top">
              <h3 class="tariff__top-title">Complex</h3>
            </div>
            <div class="tariff__main">
              <div class="tariff-price">
                <h3 class="tariff-price__main">
                  <span class="tariff-price__valute">$</span> 399/ month
                </h3>
                <ul class="tariff-options">
                  <li class="tariff-options__item">
                    <span class="dot"></span>
                    <p class="tariff-options__item-text">
                      <span>125</span> campaigns at the same time
                    </p>
                  </li>
                  <li class="tariff-options__item">
                    <span class="dot"></span>
                    <p class="tariff-options__item-text">
                      <span>25</span> unique campaigns
                    </p>
                  </li>
                  <li class="tariff-options__item">
                    <span class="dot"></span>
                    <p class="tariff-options__item-text">
                      <span>10</span> connected domains
                    </p>
                  </li>
                  <li class="tariff-options__item">
                    <span class="dot"></span>
                    <p class="tariff-options__item-text">
                      unlimited number of daily visits
                    </p>
                  </li>
                </ul>
                <nuxt-link
                    to="/"
                    class="tariff-btn custom-button custom-button_mio-grad"
                    v-ripple
                >
                  Start now
                </nuxt-link>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>


<style scoped lang="scss">

.section-tariffs {
  padding-bottom: 35px;
}

.tariff-options__item {
  justify-content: start;
}

.tariff-options {
  padding: 0 60px;
}

.tariff-price__main {
  font-weight: 600!important;
}

.tariff {
  box-shadow: 2px 2px 30px rgba(36, 82, 76, 0.15);
  max-width: 413px;
  cursor: pointer;
  transition: all 0.5s ease;

  &-btn {
    max-width: 190px;
    color: #fff;
  }

  &:hover {
    box-shadow: 2px 2px 30px rgba(36, 82, 76, 0.20);
  }

  &-price {
    color: #3E002C;
  }

  &__top {
    background: #F1F9F8;
  }

  &__top-title {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 135%;
    color: rgba(62, 0, 44, 0.4);
  }

  &-options {
    &__item {
      display: flex;
      align-items: center;

      .dot {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        background: url("./static/assets/img/miolinks/tariffs/dot-2.svg");
      }
    }

    &__item-text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 135%;
      color: #3E002C;
      margin: 10px;

      & span {
        color: #3BD1BF;
      }
    }
  }
}

.section-title {
  color: #3E002C;
}

.tariffs {
  max-width: 578px;
  width: 100%;

  &__title {
    margin-bottom: 40px;
  }

  &__link {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 135%;
    color: #E08D8D;
    align-items: center;
  }

  &__text {
    margin-top: 15px;
    padding-left: 30px;
    position: relative;
    font-size: 16px;
    line-height: 135%;
    color: #3E002C;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: url(./static/assets/img/miolinks/tariffs/dot.svg);
      width: 15px;
      height: 15px;
      display: block;
    }
  }
}

@media (max-width: 1264px) {
  .tariffs {
    margin: 0 auto 30px;
  }
  .tariffs__title {
    text-align: center;
  }
}

</style>

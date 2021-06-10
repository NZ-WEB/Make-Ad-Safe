<template>
<section class="section-payment">
  <v-container>
    <v-row class="justify-space-between align-center">
      <v-col class="col-lg-6">
        <v-img
            data-depth="0.065"
            class="layer payment-img mx-auto"
            lazy-src="/assets/img/accounts/payment/main.svg"
            src="/assets/img/accounts/payment/main.svg"
            max-height="394"
            max-width="544"
            content-class="hero-main-img"
            contain
        ></v-img>
      </v-col>
      <v-col class="col-lg-6">
        <div class="payment-top">
          <h2 class="section-title payment-top__title">
            Payment Methods
          </h2>
          <p class="payment-top__text mx-auto mx-lg-0">
            You no longer need to make any additional expenses for purchasing.
            At the time of order, the billing is already replenished and tied to the account you are working with
          </p>
        </div>
        <div
            class="payment-slider-wrapper mx-auto"
            max-width="500"
        >
          <v-window v-model="step">
            <v-window-item :value="1">
              <div class="payment-slider-item">
                <h3 class="payment-slider-item__title">
                  <div
                      @click="step--"
                      :class="step === 1 ? 'disabled': ''"
                  ></div>
                  {{ currentTitle }}
                  <span
                      @click="step++"
                      :class="step === 4 ? 'disabled': ''"
                  ></span>
                </h3>
                <span class="counter">{{step}}/4</span>
              </div>
              <p class="payment-slider-item__text">
                {{ currentText }}
              </p>
            </v-window-item>
            <v-window-item :value="2">
              <div class="payment-slider-item">
                <h3 class="payment-slider-item__title">
                  <div
                      @click="step--"
                      :class="step === 1 ? 'disabled': ''"
                  ></div>
                  {{ currentTitle }}
                  <span
                      @click="step++"
                      :class="step === 4 ? 'disabled': ''"
                  ></span>
                </h3>
                <span class="counter">{{step}}/4</span>
              </div>
              <p class="payment-slider-item__text">
                {{ currentText }}
              </p>
            </v-window-item>
            <v-window-item :value="3">
              <div class="payment-slider-item">
                <h3 class="payment-slider-item__title">
                  <div
                      @click="step--"
                      :class="step === 1 ? 'disabled': ''"
                  ></div>
                  {{ currentTitle }}
                  <span
                      @click="step++"
                      :class="step === 4 ? 'disabled': ''"
                  ></span>
                </h3>
                <span class="counter">{{step}}/4</span>
              </div>
              <p class="payment-slider-item__text">
                {{ currentText }}
              </p>
            </v-window-item>
            <v-window-item :value="4">
              <div class="payment-slider-item">
                <h3 class="payment-slider-item__title">
                  <div
                      @click="step--"
                      :class="step === 1 ? 'disabled': ''"
                  ></div>
                  {{ currentTitle }}
                  <span
                      @click="step++"
                      :class="step === 4 ? 'disabled': ''"
                  ></span>
                </h3>
                <span class="counter">{{step}}/4</span>
              </div>
              <p class="payment-slider-item__text">
                {{ currentText }}
              </p>
            </v-window-item>

          </v-window>
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
      step: 1,
    }
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'Full compliance'
        case 2:
          return 'Something another...'
        default:
          return 'Full compliance'
      }
    },
    currentText() {
      switch (this.step) {
        case 1:
          return 'Only local corporate payment methods are used. The billing country fully corresponds with the origin of the account.'
        case 2:
          return 'Only local corporate payment methods are used. The billing country fully corresponds with the origin of the account.'
        default:
          return 'Only local corporate payment methods are used. The billing country fully corresponds with the origin of the account.'
      }

    }
  }
}
</script>

<style scoped lang="scss">

.section-payment {
  padding: 115px 0;
}

.payment-img {
  margin-left: -40px;
}

.payment-top {
  margin-bottom: 45px;
  &__title {
    margin-bottom: 45px;
  }
  &__text {
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    line-height: 135%;
    color: #27295A;
    padding: 8px 0 8px 27px;
    position: relative;
    max-width: 500px;

  &::before {
    content: '';
    height: 100%;
    width: 2px;
    border-radius: 50%;
    background: #1D4681;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  }
}

.payment-slider-wrapper {
  background: #EFF9FC;
  border-radius: 10px;
  padding: 45px 45px 20px;
  min-height: 180px;
  max-width: 565px;
}

.payment-slider-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-family: Bitter;
    font-style: normal;
    font-weight: 600!important;
    font-size: 20px;
    line-height: 135%;
    color: #E63946;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 65px;
    margin-left: -10px;
    span, div {
      display: block;
      background: url('./assets/img/r-arrow.svg');
      width: 31px;
      height: 10px;
      cursor: pointer;
      transition: all 0.15s ease;
      position: absolute;
      top: 50%;

      &.disabled {
        opacity: 0.6;
      }
    }
    span {
      transform: translate(-50%, -50%);
      right: 0;
      &.disabled {
        transform: translate(-50%, -50%);
        opacity: 1;
      }
      &:hover {
        transform: translate(-50%, -50%) scale(1.07);
      }
    }
    div {
      left: 0;
      transform: translate(50%, -50%);
      background: url('./assets/img/l-arrow.svg');
      &.disabled {
        opacity: 0.6;
        transform: translate(50%, -50%);
        cursor: no-drop;
      }
      &:hover {
        transform: translate(50%, -50%) scale(1.07);
      }
    }


  }

  &__text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 135%;
    color: #27295A;
    margin-top: 20px;
    max-width: 448px;
    text-align: left;
  }
}

.counter {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 135%;
  color: #3DB4DA;
}

@media (max-width: 1264px) {
  .payment-top__title {
    text-align: center;
  }

  .payment-slider-item {
    flex-wrap: wrap;
  }

}

@media (max-width: 650px) {

  .counter {
    width: 150px;
  }
}

@media (max-width: 557px) {

  .counter {
    margin-top: 10px;
    width: 150px;
  }

  .payment-slider-item {
    justify-content: center;
  }

  .payment-slider-item__text {
    text-align: center;
  }

  .payment-slider-wrapper {
    padding: 40px 20px;
  }

  .payment-slider-item__title {
    font-size: 18px;
  }

  .payment-slider-item__text {
    font-size: 16px;
  }

  .counter {
    font-size: 14px;
  }

  .payment-slider-wrapper {
    min-height: 220px;
  }
}

</style>

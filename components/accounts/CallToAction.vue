<template>
  <div>
    <div class="section-cta">
      <v-container>
        <v-row class="justify-center">
          <v-col class="col-lg-8" >
            <div class="cta-wrapper">
              <div id="scene4">
                <v-img
                    data-depth="0.045"
                    class="cta-main-img layer opaciti-015"
                    lazy-src="/assets/img/accounts/hero/main.svg"
                    src="/assets/img/accounts/hero/main.svg"
                    max-height="657"
                    max-width="994"
                    content-class="cta-main-img-item"
                >
                </v-img>
              </div>
              <div class="cta-content">
                <h2 class="section-title">
                  Compensation in case of service failure
                </h2>
                <p class="cta-content__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <button
                    type="button"
                    class="hero-content__btn custom-button custom-button_red-grad mx-auto"
                    v-ripple
                >
                  start now
                </button>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!--    data-aos="zoom-in"-->
    <div class="questions-wrapper">
      <v-expansion-panels accordion>
        <v-expansion-panel
            class="question-panel"
            elevation="0"
            @click="dialog3 = true"
        >
          <v-expansion-panel-header>
            <h2 class="card-item__title">Any other questions?</h2>
          </v-expansion-panel-header>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <v-dialog v-model="dialog3" max-width="500px" class="questions-modal">
      <v-card>
        <h2 class="card-item__title card-item__title_modal">
          Any other questions?
        </h2>
        <v-textarea
            name="input-7-1"
            value="Your question"
            hint="Hint text"
            color="white"
            class="questions-textarea"
        ></v-textarea>
        <v-card-actions>
          <v-btn color="#27295A" class="mr-4" text @click="dialog3 = false"> Close</v-btn>
          <button
              type="button"
              class="hero-content__btn custom-button custom-button_red-grad"
              v-ripple
          >
            Send
          </button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog3: false,
    };
  }
};
</script>

<style scoped lang="scss">

.section-cta {
  padding: 115px 0;
  overflow: hidden;
}

.register-content__btn,
.cta-content__btn,
.questions-faq-content__btn {
  text-transform: capitalize;
}

.section-cta .section-title,
.section-register .section-title,
.section-questions-faq .section-title {
  max-width: 535px;
  margin: 0 auto;
}

.opaciti-015 {
  opacity: 0.20;
}

.questions-wrapper {
  width: 100%;
  height: 100px;
  background: #fff;
}

.cta-content__text,
.register-content__text,
.questions-faq-content__text {
  margin: 45px auto 35px !important;
  max-width: 726px;
  width: 100%;
}

.cta-content,
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

.cta-content__btn,
.register-content__btn,
.questions-faq-content__btn {
  margin: 0 auto;
}

.cta-wrapper,
.register-wrapper,
.questions-faq-wrapper {
  position: relative;
}

.section-cta .v-image__image,
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
  box-shadow: 2px 2px 30px rgba(36, 82, 76, 0.15);
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

.card-item__title {
  font-size: 25px;
}

@media (max-width: 560px) {
  .section-cta {
    padding: 200px 0;
  }
}

</style>

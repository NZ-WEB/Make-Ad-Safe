<template>
  <div>
    <div class="section-compinsation">
      <v-container>
        <v-row class="justify-center">
          <v-col class="col-lg-8" >
            <div class="compinsation-wrapper">
              <div id="scene4">
                <v-img
                    data-depth="0.045"
                    class="compinsation-main-img layer"
                    lazy-src="/assets/img/compinsation-main-img.png"
                    src="/assets/img/compinsation-main-img.png"
                    max-height="657"
                    max-width="994"
                    content-class="compinsation-main-img-item"
                >
                </v-img>
              </div>
              <div class="compinsation-content">
                <h2 class="section-title">
                  Compensation in case of service failure
                </h2>
                <p class="compinsation-content__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <button
                    type="button"
                    class="compinsation-content__btn custom-button"
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
          <v-btn color="primary" text @click="dialog3 = false"> Close</v-btn>
          <button
              type="button"
              class="questions-madal-btn custom-button"
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


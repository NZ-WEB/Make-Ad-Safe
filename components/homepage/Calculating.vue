<template>
  <div class="section-calculating">
    <v-container>
      <v-row class="align-center justify-space-between flex-column flex-md-row">
        <v-col class="col-lg-6" >
          <h2 class="section-title">Calculate your own tariff</h2>
          <p class="section-calculating-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p class="section-calculating-description">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehend in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p class="section-calculating-description">
            Excepteurer sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum ea consequat.
          </p>
        </v-col>
        <v-col class="col-lg-6" >
          <v-stepper v-model="e1">
            <v-stepper-header elevation="0">
              <v-stepper-step :complete="e1 > 1" step="1" color="#1976d2">
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2" color="#1976d2">
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3" color="#1976d2"> </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card class="step-1">
                  <h3 class="step-title" mb="35">Your country</h3>
                  <ul class="countries">
                    <li
                      class="countries__item"
                      v-for="item in countries"
                      :key="item.id"
                    >
                      <v-btn icon class="countries__icon" fab>
                        <img :src="item.url" alt="" />
                      </v-btn>
                    </li>
                    <!-- <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/ukraine 1.svg" alt="">
                                                    </v-btn>
                                                </li>
                                                <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/belarus 1.svg" alt="">
                                                    </v-btn>
                                                </li>
                                                <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/china 1.svg" alt="">
                                                    </v-btn>
                                                </li>
                                                <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/finland 1.svg" alt="">
                                                    </v-btn>
                                                </li>
                                                <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/france 1.svg" alt="">
                                                    </v-btn>
                                                </li>
                                                <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/germany 1.svg" alt="">
                                                    </v-btn>
                                                </li>
                                                <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/italy 1.svg" alt="">
                                                    </v-btn>
                                                </li>
                                                <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/japan 1.svg" alt="">
                                                    </v-btn>
                                                </li>
                                                <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/kazakhstan 1.svg" alt="">
                                                    </v-btn>
                                                </li>
                                                <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/spain 1.svg" alt="">
                                                    </v-btn>
                                                </li>
                                                <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/united-kingdom 1.svg" alt="">
                                                    </v-btn>
                                                </li>
                                                <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/armenia 1.svg" alt="">
                                                    </v-btn>
                                                </li>
                                                <li class="countries__item">
                                                    <v-btn
                                                        icon
                                                    >
                                                        <img src="/assets/img/countries/united-states 1.svg" alt="">
                                                    </v-btn>
                                                </li> -->
                  </ul>
                  <p class="calculating-select-text">
                    You chose Russia as your country
                  </p>
                </v-card>
                <div class="countries-next-btn-wrapper">
                  <v-btn
                    color="primary"
                    elevation="0"
                    outlined
                    x-large
                    v-ripple
                    class="unfield-custom-btn countries-next-btn"
                    block
                    @click="e1 = 2"
                  >
                    Next page
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card class="mb-10">
                  <h3 class="step-title" mb="35">Connection type</h3>
                  <v-radio-group
                    v-model="radioGroup"
                    class="calculating-radio-grup"
                  >
                    <v-radio label="private" color="#1976d2"></v-radio>
                    <v-radio label="backconnect" color="#1976d2"></v-radio>
                  </v-radio-group>
                  <p
                    class="calculating-select-text calculating-select-text_second"
                  >
                    You chose Russia as your country
                  </p>
                </v-card>

                <div class="countries-next-btn-wrapper">
                  <v-btn
                    color="primary"
                    elevation="0"
                    outlined
                    x-large
                    v-ripple
                    class="unfield-custom-btn countries-next-btn"
                    block
                    @click="e1 = 3"
                  >
                    Next page
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card class="mb-4">
                  <h3 class="step-title" mb="35">Mobile operator</h3>
                  <v-radio-group
                    v-model="radioGroup"
                    class="calculating-radio-grup calculating-radio-grup_flex"
                  >
                    <v-radio label="Beeline" color="#1976d2"></v-radio>
                    <v-radio label="TELE2" color="#1976d2"></v-radio>
                    <v-radio label="Yota" color="#1976d2"></v-radio>
                    <v-radio label="AT&T" color="#1976d2"></v-radio>
                    <v-radio label="MTS" color="#1976d2"></v-radio>
                    <v-radio label="Other" color="#1976d2"></v-radio>
                  </v-radio-group>
                </v-card>
                <div class="countries-next-btn-wrapper">
                  <v-btn
                    color="primary"
                    elevation="0"
                    outlined
                    x-large
                    v-ripple
                    class="unfield-custom-btn countries-next-btn"
                    block
                    @click="e1 = 1"
                  >
                    Next page
                  </v-btn>
                </div>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            e1: 1,
            radioGroup: 1,
                        countries: {

                3: {
                    id: 3,
                    url: '/assets/img/countries/china 1.svg',
                },
                4: {
                    id: 4,
                    url: '/assets/img/countries/finland 1.svg',
                },
                5: {
                    id: 5,
                    url: '/assets/img/countries/france 1.svg',
                },
                6: {
                    id: 6,
                    url: '/assets/img/countries/germany 1.svg',
                },
                7: {
                    id: 7,
                    url: '/assets/img/countries/italy 1.svg',
                },
                8: {
                    id: 8,
                    url: '/assets/img/countries/japan 1.svg',
                },

                11: {
                    id: 11,
                    url: '/assets/img/countries/spain 1.svg',
                },
                12: {
                    id: 12,
                    url: '/assets/img/countries/ukraine 1.svg',
                },
                13: {
                    id: 13,
                    url: '/assets/img/countries/united-kingdom 1.svg',
                },
                14: {
                    id: 14,
                    url: '/assets/img/countries/united-states 1.svg',
                },
            },
        }
    },
}
</script>

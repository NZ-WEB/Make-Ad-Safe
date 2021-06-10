<template>
  <div class="section-graphs">
    <v-container>
      <v-row>
        <v-col class="col">
          <h2 class="section-title">How it works?</h2>
        </v-col>
      </v-row>
      <v-row class="justify-lg-space-between flex-column flex-md-row">
        <v-col class="col-lg-7" data-aos="zoom-in-right">
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item, i) in 3" :key="i">
              <v-expansion-panel-header>
                <h2 class="card-item__title">1. Lorem ipsum dolor sit amet</h2>
              </v-expansion-panel-header>
              <div class="grphs-card-description">
                <p class="card-item__text">
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem
                  ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
                  dolor sit ametLorem ipsum dolor sit amet
                </p>
              </div>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col class="col-lg-5">
          <div class="graphs" data-aos="zoom-in-left">
              <v-img
                data-depth="-0.035"
                class="graphs-bg-img"
                lazy-src="/assets/img/graphs-bg-img-1.png"
                src="/assets/img/graphs-bg-img-1.png"
                max-height="419"
                max-width="367"
                content-class="graphs-bg-img__item"
              >
              </v-img>
            <!-- Main Graph Start -->
            <v-card class="main-graph-wrapper">
              <v-row class="space-between align-center">
                <v-card-title>
                  <h2 class="main-graph-title">Traffic</h2>
                </v-card-title>
                <v-card-title>
                  <h2 class="main-graph-subtitle">40tb</h2>
                </v-card-title>
              </v-row>
              <v-sheet
                class="v-sheet--offset mx-auto"
                color="transparent"
                elevation=""
                max-width="380"
              >
                <v-sparkline
                  :labels="labels"
                  :value="value"
                  color="#871FFF"
                  line-width="2"
                  padding="16"
                  label-size="7"
                  smooth="50"
                  height="150"
                ></v-sparkline>
              </v-sheet>
            </v-card>
            <!-- Main Graph End -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            labels: [
                '1 Jan',
                '7 Jan',
                '14 Jan',
                '21 Jan',
                '28 Jan',
            ],
            value: [
                0,
                975,
                410,
                100,
                800,
            ],
        }
    },
}
</script>

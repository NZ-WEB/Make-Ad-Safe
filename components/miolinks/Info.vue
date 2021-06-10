<template>
  <div class="section-info">
    <v-container>
      <v-row>
        <v-col class="mb-6">
          <h2 class="section-title info-section-title">How our service works?</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
            class="col-12 col-lg-6"
            v-for="item in cards"
            :key="item.id"
            data-aos="zoom-in"
        >
          <v-card
              class="card-item d-flex flex-column flex-sm-row mx-auto"
              max-width="840"
              outlined
          >
            <img :src="item.icon" alt="" class="card-item__img" />
            <div class="card-item__content">
              <h3 class="card-item__title">
                {{ item.title }}
              </h3>
              <v-card-text class="card-item__text">
                {{ item.text }}
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Getting a software service",
          text:
              "For the consumer, the main advantage of the model is the absence of expenses associated with the installation and maintenance of equipment and software that runs on it.",
          icon: "/assets/img/miolinks/info/icon1.svg",
        },
        {
          id: 2,
          title: "Creating deep links",
          text:
              "Social media apps and messengers are now available on every device. The technology of creating deep links helps you to improve the efficiency of advertising companies.",
          icon: "/assets/img/miolinks/info/icon2.svg",
        },
        {
          id: 3,
          title: "Using a dedicated cloud",
          text:
              "Our service uses dedicated cloud which completely isolated from other cloud tenants with its own dedicated security, capacity and performance.",
          icon: "/assets/img/miolinks/info/icon3.svg",
        },
        {
          id: 4,
          title: "Detection of real device",
          text:
              "Basic device detection depends on user agent compliance. However, this is easy to fake, and we are looking for additional criteria to  determine if the user is on a mobile device.",
          icon: "/assets/img/miolinks/info/icon4.svg",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">

.info-section-title {
  text-align: center;
}

.section-info {
  background: rgba(54, 171, 157, 0.07);
}

.card-item {
  box-shadow: 2px 2px 30px rgba(36, 82, 76, 0.15);
  transition: all 0.5s ease;
  &__title {
    color: #E08D8D;
  }
}

.section-title {
  color: #3E002C;
}


</style>

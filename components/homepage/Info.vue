<template>
  <div class="section-info">
    <v-container>
      <v-row>
        <v-col class="mb-6">
          <h2 class="section-title">Mobile proxies help everyone</h2>
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
          title: "Traffic arbitrators, CPA teams",
          text:
            "Send messages of all types through available channels (messengers, social networks, mail), manage a variety of advertising cabinets without worrying about blocking!",
          icon: "/assets/img/cards-icons/1.svg",
        },
        {
          id: 2,
          title: "Marketers, SEO specialists",
          text:
            "Need to parse results of search, post content, is there a risk of blocking? Our proxies allow you to conduct business safely, without being distracted by unnecessary tasks.",
          icon: "/assets/img/cards-icons/2.svg",
        },
        {
          id: 3,
          title: "Software developers",
          text:
            "Integrate our proxies into your internet promotion, SEO, parsing, anti-detection and other software, achieving the required tasks much easier and safer.",
          icon: "/assets/img/cards-icons/3.svg",
        },
        {
          id: 4,
          title: "Entrepreneurs, individuals",
          text:
            "Automate your actions, protect products from counterfeiting and stay incognito at the Internet, working with any sites will become much easier with our proxies",
          icon: "/assets/img/cards-icons/4.svg",
        },
      ],
    };
  },
};
</script>
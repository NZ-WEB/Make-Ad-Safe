<template>
  <div>
    <v-navigation-drawer v-model="drawer" class="d-lg-none" width="600px" fixed>
      <div class="draver-content">
        <h2 class="draver-menu-title">Menu</h2>
        <v-list class="draver-content-list">
          <v-btn class="draver-close-btn" icon @click="drawer = !drawer">
            <v-icon> mdi-close</v-icon>
          </v-btn>

          <v-list-item
              class="draver-content-list__item"
              v-for="item in mainMenuList"
              :key="item.id"
          >
            <v-list-item-content>
              <nuxt-link :to="item.href">
                <v-btn text>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-btn>
              </nuxt-link>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-menu
                  transition="slide-y-transition"
                  bottom
                  content-class="langs-menu"
                  class="draver-content-list__item"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" text class="langs-btn">
                    En
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(langItem, index) in langs" :key="index">
                    <v-list-item-title>
                      <v-btn block text>
                        {{ langItem.lang }}
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-app-bar
        fixed
        color="white"
        elevate-on-scroll
        height="120px"
        class="header"
    >
      <v-container>
        <v-row justify="space-between" class="align-items-center">
          <v-col
              class="my-auto col-4 col-lg-2 order-1 order-lg-0 d-flex justify-center justify-lg-start"
          >
            <a href="/" class="logo-link">
              <img class="logo-link__image" src="/assets/img/logo.svg" alt="">
            </a>
          </v-col>
          <v-col class="d-none d-lg-flex col-lg-8">
            <v-list class="app-bar-nav-list d-flex ml-auto">
              <v-list-item
                  class="app-bar-nav-list__item"
                  v-for="item in mainMenuList"
                  :key="item.id"
              >
                <v-btn text :href="item.href">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-menu
                    transition="slide-y-transition"
                    bottom
                    content-class="langs-menu"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" text class="langs-btn">
                      En
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                        v-for="(langItem, index) in langs"
                        :key="index"
                    >
                      <v-list-item-title class="langs-name">
                        <v-btn block text>
                          {{ langItem.lang }}
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col class="my-auto col-4 col-lg-2">
            <div class="btn-unfield-wrapper">
              <v-btn
                  color="deep-purple"
                  elevation="0"
                  outlined
                  x-large
                  v-ripple
                  block
                  class="unfield-custom-btn d-none d-lg-flex"
                  href="https://dash.makeadsafe.com"
              >
                Get started
              </v-btn>
            </div>
            <v-btn icon class="d-lg-none" color="#841FEA">
              <v-icon>mdi-key</v-icon>
            </v-btn>
          </v-col>
          <v-col
              class="col-4 col-lg-2 d-lg-none order-2 order-lg 0 d-flex justify-flex-end"
          >
            <v-btn @click="drawer = !drawer" icon class="burger-btn">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      langs: [{lang: "Ru"}, {lang: "En"}],
      mainMenuList: [
        {
          id: 1,
          title: "Plans",
          href: "/",
        },
        {
          id: 2,
          title: "FAQ",
          href: "/",
        },
      ],
    };
  },
};

</script>

<style scoped lang="scss">


</style>

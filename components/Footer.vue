<template>

  <v-footer class="footer">

    <v-container>
      <v-row class="justify-space-between">
        <v-col class="col-12 col-sm-6 col-md-3">
          <v-img
            width="100%"
            src="/assets/img/logo.svg"
            alt="logo"
            max-width="120px"
            class="mb-4 footer-logo"
          ></v-img>
          <p class="footer-copy">
            Copyright © 2019-{{ new Date().getFullYear() }}
            All rights reserved
          </p>
          <p class="mt-4">
            <a href="https://www.megastock.com/" rel="nofollow" target="_blank">
              <img src="/assets/img/88x31_wm_blue.png" alt="client-logo"
            /></a>
            <a
              href="https://passport.webmoney.ru/asp/certview.asp?wmid=869549893394"
              rel="nofollow"
              target="_blank"
            >
              <img src="/assets/img/v_blue_on_transp_en.png" alt="client-logo"
            /></a>
          </p>
        </v-col>
        <v-col class="col-12 col-sm-6 col-md-2">
          <v-list class="app-bar-nav-list">
            <v-list-item class="app-bar-nav-list__item">
              <h3 class="footer-nav-title">Company</h3>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="col-12 col-sm-6 col-md-2">
          <v-list class="documentation-list">
            <v-list-item class="app-bar-nav-list__item">
              <h3 class="footer-nav-title">Documentation</h3>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="col-12 col-sm-6 col-md-3">
          <v-list class="contact-list" id="contact">
            <v-list-item class="contact-list__item">
              <v-list-item-title class="footer-nav-title"
                > Contacts </v-list-item-title
              >
            </v-list-item>
            <v-list-item class="contact-list__item">
              <!-- <noindex> -->
              <a
                href="#"
                rel="nofollow"
                class="location-link d-flex align-center"
              >
                <v-icon color="#5E5BDE"> mdi-map-marker </v-icon>
                <span class="location-title ml-2">
                  Narva Kreenholmi 42-47, 20201 Estonia
                </span>
              </a>
              <!-- </noindex> -->
            </v-list-item>
            <v-list-item class="contact-list__item">
              <!-- <noindex> -->
              <a
                href="#"
                rel="nofollow"
                class="location-link d-flex align-center"
              >
                <v-icon color="#5E5BDE"> mdi-email-outline </v-icon>
                <span class="email-title email-title_ml5 ml-2">
                  cvbcvg@mail.com
                </span>
              </a>
              <!-- </noindex> -->
            </v-list-item>
            <v-list-item class="contact-list__item">
              <!-- <noindex> -->
              <a
                href="#"
                rel="nofollow"
                class="location-link d-flex align-center"
              >
                <v-icon color="#5E5BDE"> mdi-phone </v-icon>
                <span class="phone-title title_ml5 ml-2"> +372 583-88-427 </span>
              </a>
              <!-- </noindex> -->
            </v-list-item>
            <v-list-item class="contact-list__item">
              <v-list class="networks d-flex">
                <v-list-item class="networks__item">
                  <v-btn icon>
                    <img src="/assets/img/networks/inst-purp.svg" alt="inst" />
                  </v-btn>
                </v-list-item>
                <v-list-item class="networks__item">
                  <v-btn icon>
                    <img src="/assets/img/networks/fb-purp.svg" alt="inst" />
                  </v-btn>
                </v-list-item>
                <v-list-item class="networks__item">
                  <v-btn icon>
                    <img src="/assets/img/networks/skype-purp.svg" alt="inst" />
                  </v-btn>
                </v-list-item>
                <v-list-item class="networks__item">
                  <v-btn icon>
                    <img src="/assets/img/networks/telegram-purp.svg" alt="inst" />
                  </v-btn>
                </v-list-item>
                <v-list-item class="networks__item">
                  <v-btn icon>
                    <img src="/assets/img/networks/whatsup-purp.svg" alt="inst" />
                  </v-btn>
                </v-list-item>
              </v-list>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

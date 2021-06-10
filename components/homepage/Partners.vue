<template>
            <div class="section-partners">
                <v-container>
                    <v-row class="align-center justify-space-between flex-column flex-md-row">
                        <v-col class="col-9 col-md-6 col-lg-7" data-aos="zoom-in-left">
                            <ul
                                    class="partners-list">
                                <li
                                        v-for="(item, i) in partners"
                                        :key="i"
                                        class="partners-item"

                                >
                                    <v-list-item-icon>
                                        <img :src="item.icon" alt="">
                                    </v-list-item-icon>
                                </li>
                            </ul>
                        </v-col>
                        <v-col class="col-8 col-md-6 col-lg-5" data-aos="zoom-in-right">
                            <h2 class="section-title">
                                Our partners
                            </h2>
                            <p class="section-partners-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
</template>

<script>
export default {
    data() {
        return {
             partners: [
                {
                    icon: '/assets/img/partners/partner 1.svg',
                },
                {
                    icon: '/assets/img/partners/partner 1.svg',
                },
                {
                    icon: '/assets/img/partners/partner 1.svg',
                },
                {
                    icon: '/assets/img/partners/partner 1.svg',
                },
                {
                    icon: '/assets/img/partners/partner 1.svg',
                },
                {
                    icon: '/assets/img/partners/partner 1.svg',
                },
                {
                    icon: '/assets/img/partners/partner 1.svg',
                },
                {
                    icon: '/assets/img/partners/partner 1.svg',
                },
            ],
        }
    },
}
</script>
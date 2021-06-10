<template>
<section class="section-resources">
  <v-container>
    <v-row>
      <h2 class="section-title resources-title mx-xl-auto">
        Save Resources
      </h2>
    </v-row>
    <v-row class="justify-xl-space-between">
      <v-col class="col-11 col-sm-9 col-lg-6 col-xl-5 mx-auto" v-for="(resource, id) in resourcesItems" :key="id" data-aos="zoom-in">
        <div class="resources-item">
          <img :src="resource.icon" class="resources-item__icon">
          <div class="resources-item__content">
            <h3 class="resources-item__title">
              {{ resource.title }}
            </h3>
            <p class="resources-item__text">
              {{ resource.text }}
            </p>
          </div>
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
      resourcesItems: [
        {
          icon: '/assets/img/accounts/resources/1.svg',
          title: 'Time',
          text: "Don't waste your time on searching or farming new accounts. Everything is ready for work. You only need a couple of clicks to get started"
        },
        {
          icon: '/assets/img/accounts/resources/2.svg',
          title: 'Money',
          text: "Our solution allows you to save on the working time payment of employees of the farming department and a number of consumables"
        },
        {
          icon: '/assets/img/accounts/resources/3.svg',
          title: 'Motivation',
          text: "Don't waste your time on searching or farming new accounts. Everything is ready for work. You only need a couple of clicks to get started"
        },
        {
          icon: '/assets/img/accounts/resources/4.svg',
          title: 'Control',
          text: "Don't waste your time on searching or farming new accounts. Everything is ready for work. You only need a couple of clicks to get started"
        },
      ]
    }
  },
  name: "Resources"
}
</script>

<style scoped lang="scss">

.section-resources {
  background: rgba(230, 57, 70, 0.07);
  padding: 112px 0;
}

.resources-title {
  margin-bottom: 60px;
}

.resources-item {
  display: flex;
  align-items: center;
  padding: 35px;
  background: #FFFFFF;
  border-radius: 10px;
  max-width: 560px;
  margin: 0 auto;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: -4px 4px 35px rgba(230, 57, 70, 0.15);
  }

  &__content {
    margin-left: 28px;
   }
  &__title {
    font-style: normal;
    font-weight: 600!important;
    font-size: 20px;
    line-height: 135%;
    color: #E63946;
    margin-bottom: 20px;
  }

  &__text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 135%;
    color: #27295A;
  }

}

@media (max-width: 1264px) {
  .resources-title {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 961px) {
  .resources-item {
    flex-direction: column;
  }
  .resources-item__title {
    text-align: center;
  }

  .resources-item__content {
    margin-left: 0;
    margin-top: 20px;
  }
}

</style>

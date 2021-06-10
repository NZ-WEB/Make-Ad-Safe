import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  HomepageAbout: () => import('../..\\components\\homepage\\About.vue' /* webpackChunkName: "components/homepage-about" */).then(c => wrapFunctional(c.default || c)),
  HomepageCalculating: () => import('../..\\components\\homepage\\Calculating.vue' /* webpackChunkName: "components/homepage-calculating" */).then(c => wrapFunctional(c.default || c)),
  HomepageCallToAction: () => import('../..\\components\\homepage\\CallToAction.vue' /* webpackChunkName: "components/homepage-call-to-action" */).then(c => wrapFunctional(c.default || c)),
  HomepageChoosing: () => import('../..\\components\\homepage\\Choosing.vue' /* webpackChunkName: "components/homepage-choosing" */).then(c => wrapFunctional(c.default || c)),
  HomepageGraphs: () => import('../..\\components\\homepage\\Graphs.vue' /* webpackChunkName: "components/homepage-graphs" */).then(c => wrapFunctional(c.default || c)),
  HomepageHero: () => import('../..\\components\\homepage\\Hero.vue' /* webpackChunkName: "components/homepage-hero" */).then(c => wrapFunctional(c.default || c)),
  HomepageInfo: () => import('../..\\components\\homepage\\Info.vue' /* webpackChunkName: "components/homepage-info" */).then(c => wrapFunctional(c.default || c)),
  HomepagePartners: () => import('../..\\components\\homepage\\Partners.vue' /* webpackChunkName: "components/homepage-partners" */).then(c => wrapFunctional(c.default || c)),
  HomepagePlans: () => import('../..\\components\\homepage\\Plans.vue' /* webpackChunkName: "components/homepage-plans" */).then(c => wrapFunctional(c.default || c)),
  MiolinksChoose: () => import('../..\\components\\miolinks\\Choose.vue' /* webpackChunkName: "components/miolinks-choose" */).then(c => wrapFunctional(c.default || c)),
  MiolinksHero: () => import('../..\\components\\miolinks\\Hero.vue' /* webpackChunkName: "components/miolinks-hero" */).then(c => wrapFunctional(c.default || c)),
  MiolinksInfo: () => import('../..\\components\\miolinks\\Info.vue' /* webpackChunkName: "components/miolinks-info" */).then(c => wrapFunctional(c.default || c)),
  MiolinksPlans: () => import('../..\\components\\miolinks\\Plans.vue' /* webpackChunkName: "components/miolinks-plans" */).then(c => wrapFunctional(c.default || c)),
  MiolinksStrongSides: () => import('../..\\components\\miolinks\\StrongSides.vue' /* webpackChunkName: "components/miolinks-strong-sides" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

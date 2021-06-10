import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
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

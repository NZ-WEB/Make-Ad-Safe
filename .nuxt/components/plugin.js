import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  AccountsCallToAction: () => import('../..\\components\\accounts\\CallToAction.vue' /* webpackChunkName: "components/accounts-call-to-action" */).then(c => wrapFunctional(c.default || c)),
  AccountsFeatures: () => import('../..\\components\\accounts\\Features.vue' /* webpackChunkName: "components/accounts-features" */).then(c => wrapFunctional(c.default || c)),
  AccountsHero: () => import('../..\\components\\accounts\\Hero.vue' /* webpackChunkName: "components/accounts-hero" */).then(c => wrapFunctional(c.default || c)),
  AccountsPayment: () => import('../..\\components\\accounts\\Payment.vue' /* webpackChunkName: "components/accounts-payment" */).then(c => wrapFunctional(c.default || c)),
  AccountsResources: () => import('../..\\components\\accounts\\Resources.vue' /* webpackChunkName: "components/accounts-resources" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

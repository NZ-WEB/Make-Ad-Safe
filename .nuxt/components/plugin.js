import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  MakeAdSafeHero: () => import('../..\\components\\make-ad-safe\\Hero.vue' /* webpackChunkName: "components/make-ad-safe-hero" */).then(c => wrapFunctional(c.default || c)),
  MakeAdSafeServices: () => import('../..\\components\\make-ad-safe\\Services.vue' /* webpackChunkName: "components/make-ad-safe-services" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

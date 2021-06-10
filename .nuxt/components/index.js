import { wrapFunctional } from './utils'

export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as MakeAdSafeHero } from '../..\\components\\make-ad-safe\\Hero.vue'
export { default as MakeAdSafeServices } from '../..\\components\\make-ad-safe\\Services.vue'

export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyMakeAdSafeHero = import('../..\\components\\make-ad-safe\\Hero.vue' /* webpackChunkName: "components/make-ad-safe-hero" */).then(c => wrapFunctional(c.default || c))
export const LazyMakeAdSafeServices = import('../..\\components\\make-ad-safe\\Services.vue' /* webpackChunkName: "components/make-ad-safe-services" */).then(c => wrapFunctional(c.default || c))

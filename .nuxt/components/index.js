import { wrapFunctional } from './utils'

export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as AccountsCallToAction } from '../..\\components\\accounts\\CallToAction.vue'
export { default as AccountsFeatures } from '../..\\components\\accounts\\Features.vue'
export { default as AccountsHero } from '../..\\components\\accounts\\Hero.vue'
export { default as AccountsPayment } from '../..\\components\\accounts\\Payment.vue'
export { default as AccountsResources } from '../..\\components\\accounts\\Resources.vue'

export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyAccountsCallToAction = import('../..\\components\\accounts\\CallToAction.vue' /* webpackChunkName: "components/accounts-call-to-action" */).then(c => wrapFunctional(c.default || c))
export const LazyAccountsFeatures = import('../..\\components\\accounts\\Features.vue' /* webpackChunkName: "components/accounts-features" */).then(c => wrapFunctional(c.default || c))
export const LazyAccountsHero = import('../..\\components\\accounts\\Hero.vue' /* webpackChunkName: "components/accounts-hero" */).then(c => wrapFunctional(c.default || c))
export const LazyAccountsPayment = import('../..\\components\\accounts\\Payment.vue' /* webpackChunkName: "components/accounts-payment" */).then(c => wrapFunctional(c.default || c))
export const LazyAccountsResources = import('../..\\components\\accounts\\Resources.vue' /* webpackChunkName: "components/accounts-resources" */).then(c => wrapFunctional(c.default || c))

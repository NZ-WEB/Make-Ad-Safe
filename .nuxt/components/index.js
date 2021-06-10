import { wrapFunctional } from './utils'

export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as MiolinksChoose } from '../..\\components\\miolinks\\Choose.vue'
export { default as MiolinksHero } from '../..\\components\\miolinks\\Hero.vue'
export { default as MiolinksInfo } from '../..\\components\\miolinks\\Info.vue'
export { default as MiolinksPlans } from '../..\\components\\miolinks\\Plans.vue'
export { default as MiolinksStrongSides } from '../..\\components\\miolinks\\StrongSides.vue'

export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyMiolinksChoose = import('../..\\components\\miolinks\\Choose.vue' /* webpackChunkName: "components/miolinks-choose" */).then(c => wrapFunctional(c.default || c))
export const LazyMiolinksHero = import('../..\\components\\miolinks\\Hero.vue' /* webpackChunkName: "components/miolinks-hero" */).then(c => wrapFunctional(c.default || c))
export const LazyMiolinksInfo = import('../..\\components\\miolinks\\Info.vue' /* webpackChunkName: "components/miolinks-info" */).then(c => wrapFunctional(c.default || c))
export const LazyMiolinksPlans = import('../..\\components\\miolinks\\Plans.vue' /* webpackChunkName: "components/miolinks-plans" */).then(c => wrapFunctional(c.default || c))
export const LazyMiolinksStrongSides = import('../..\\components\\miolinks\\StrongSides.vue' /* webpackChunkName: "components/miolinks-strong-sides" */).then(c => wrapFunctional(c.default || c))

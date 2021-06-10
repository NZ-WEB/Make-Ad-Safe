import { wrapFunctional } from './utils'

export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as HomepageAbout } from '../..\\components\\homepage\\About.vue'
export { default as HomepageCalculating } from '../..\\components\\homepage\\Calculating.vue'
export { default as HomepageCallToAction } from '../..\\components\\homepage\\CallToAction.vue'
export { default as HomepageChoosing } from '../..\\components\\homepage\\Choosing.vue'
export { default as HomepageGraphs } from '../..\\components\\homepage\\Graphs.vue'
export { default as HomepageHero } from '../..\\components\\homepage\\Hero.vue'
export { default as HomepageInfo } from '../..\\components\\homepage\\Info.vue'
export { default as HomepagePartners } from '../..\\components\\homepage\\Partners.vue'
export { default as HomepagePlans } from '../..\\components\\homepage\\Plans.vue'
export { default as MiolinksChoose } from '../..\\components\\miolinks\\Choose.vue'
export { default as MiolinksHero } from '../..\\components\\miolinks\\Hero.vue'
export { default as MiolinksInfo } from '../..\\components\\miolinks\\Info.vue'
export { default as MiolinksPlans } from '../..\\components\\miolinks\\Plans.vue'
export { default as MiolinksStrongSides } from '../..\\components\\miolinks\\StrongSides.vue'

export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageAbout = import('../..\\components\\homepage\\About.vue' /* webpackChunkName: "components/homepage-about" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageCalculating = import('../..\\components\\homepage\\Calculating.vue' /* webpackChunkName: "components/homepage-calculating" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageCallToAction = import('../..\\components\\homepage\\CallToAction.vue' /* webpackChunkName: "components/homepage-call-to-action" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageChoosing = import('../..\\components\\homepage\\Choosing.vue' /* webpackChunkName: "components/homepage-choosing" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageGraphs = import('../..\\components\\homepage\\Graphs.vue' /* webpackChunkName: "components/homepage-graphs" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageHero = import('../..\\components\\homepage\\Hero.vue' /* webpackChunkName: "components/homepage-hero" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepageInfo = import('../..\\components\\homepage\\Info.vue' /* webpackChunkName: "components/homepage-info" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepagePartners = import('../..\\components\\homepage\\Partners.vue' /* webpackChunkName: "components/homepage-partners" */).then(c => wrapFunctional(c.default || c))
export const LazyHomepagePlans = import('../..\\components\\homepage\\Plans.vue' /* webpackChunkName: "components/homepage-plans" */).then(c => wrapFunctional(c.default || c))
export const LazyMiolinksChoose = import('../..\\components\\miolinks\\Choose.vue' /* webpackChunkName: "components/miolinks-choose" */).then(c => wrapFunctional(c.default || c))
export const LazyMiolinksHero = import('../..\\components\\miolinks\\Hero.vue' /* webpackChunkName: "components/miolinks-hero" */).then(c => wrapFunctional(c.default || c))
export const LazyMiolinksInfo = import('../..\\components\\miolinks\\Info.vue' /* webpackChunkName: "components/miolinks-info" */).then(c => wrapFunctional(c.default || c))
export const LazyMiolinksPlans = import('../..\\components\\miolinks\\Plans.vue' /* webpackChunkName: "components/miolinks-plans" */).then(c => wrapFunctional(c.default || c))
export const LazyMiolinksStrongSides = import('../..\\components\\miolinks\\StrongSides.vue' /* webpackChunkName: "components/miolinks-strong-sides" */).then(c => wrapFunctional(c.default || c))

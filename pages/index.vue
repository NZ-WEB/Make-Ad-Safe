<template>
  <div>
    <Hero />
    <Info />
    <Choosing />
    <About />
    <Graphs />
    <Plans />
    <Calculating />
    <Partners />
    <CallToAction />
  </div>
</template>

<script>
import Hero from "~/components/homepage/Hero.vue";
import Info from "~/components/homepage/Info.vue";
import Choosing from "~/components/homepage/Choosing.vue";
import About from "~/components/homepage/About.vue";
import Graphs from "~/components/homepage/Graphs.vue";
import Plans from "~/components/homepage/Plans.vue";
import Calculating from "~/components/homepage/Calculating.vue";
import Partners from "~/components/homepage/Partners.vue";
import CallToAction from "~/components/homepage/CallToAction.vue";

import Parallax from "parallax-js";

export default {
  components: {
    Hero,
    Info,
    Choosing,
    About,
    Graphs,
    Plans,
    Calculating,
    Partners,
    CallToAction,
  },
  onload() {
    var scene1 = document.getElementById("scene1");
    var scene2 = document.getElementById("scene2");
    var scene3 = document.getElementById("scene3");
    var scene4 = document.getElementById("scene4");
    new Parallax(scene1);
    new Parallax(scene2);
    new Parallax(scene3);
    new Parallax(scene4);
  },
};
</script>

<script>
import { RouterView } from "vue-router";
import BottomHeader from "./views/Partials/BottomHeader.vue";
import TopHeader from "./views/Partials/TopHeader.vue";
import Footer from "./views/Partials/Footer.vue";

import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
  initFlowbite,
} from "flowbite";

export default {
  name: "Root",

  components: {
    TopHeader,
    BottomHeader,
    Footer,
  },
  watch: {
    $route: {
        immediate: true,
        handler(to, from) {
          document.title = `${to.meta.title} - Bagisto` || 'Some Default Title';
        }
    },
  },
  created() {
    this.$Progress.start();

    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;

        this.$Progress.parseMeta(meta);
      }

      this.$Progress.start();

      next();
    });

    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
    });
  },
  mounted() {
    initFlowbite();
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
  },
};
</script>

<template>
  <TopHeader />
  <BottomHeader />

  <RouterView></RouterView>
  <Footer />
  <vue-progress-bar />
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

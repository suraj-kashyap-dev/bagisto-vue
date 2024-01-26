<script>
import { RouterView } from 'vue-router';
import BottomHeader from './components/Header/BottomHeader.vue';
import TopHeader from './components/Header/TopHeader.vue';
import Carousel from './components/Carousels/Index.vue';
import { useAuthStore } from '@/stores/modules/auth';

export default {
  name: "App",
  components: {
    BottomHeader,
    TopHeader,
    Carousel
  },
}

</script>

<template>
  <TopHeader />
  <BottomHeader />
  
  <!-- <Carousel /> -->

  <RouterView></RouterView>
</template>
<script>
import { RouterView } from 'vue-router';
import BottomHeader from './components/Header/BottomHeader.vue';
import TopHeader from './components/Header/TopHeader.vue';

export default {
  name: "App",
  components: {
    BottomHeader,
    TopHeader, 
  }
}

</script>

<template>
  <div>
    <top-header />
    <bottom-header />
    <RouterView />
  </div>
</template>
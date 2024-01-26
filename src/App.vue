<script>
import { RouterView } from 'vue-router';
import BottomHeader from './components/Header/BottomHeader.vue';
import TopHeader from './components/Header/TopHeader.vue';
import { useAuthStore } from '@/stores/modules/auth';

export default {
  name: "App",
  components: {
    BottomHeader,
    TopHeader,
  },
  created() {
    const authStore = useAuthStore();
    authStore.initializeAuth();
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
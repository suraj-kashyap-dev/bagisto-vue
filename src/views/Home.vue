<script setup>
import ProductCarousel from "@/components/Products/Carousel.vue";
import Hero from "@/components/Hero/Index.vue";
</script>

<template>
  <Hero />
  <section class="bg-white dark:bg-gray-900">
    <div class="px-[100px]">
      <ProductCarousel title="Products" />
      <ProductCarousel title="Sale on new producs" />
    </div>
  </section>
</template>

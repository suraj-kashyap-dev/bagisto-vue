<script setup>
import ProductCarousel from "@/components/Products/Carousel.vue";
import CategoryCarousel from "@/components/Category/Carousel.vue";
import Hero from "@/components/Hero/Index.vue";
import GalleryTwo from "@/components/Widgets/GalleryTwo.vue";
import GalleryOne from "@/components/Widgets/GalleryOne.vue";
import { useHomeStore } from "@/stores/modules/home";
const homeStore = useHomeStore();
const themes = homeStore.themes;
</script>

<template>
  <!-- Hero section -->
  <Hero />
  <section class="bg-white dark:bg-gray-900">
    <div class="lg:px-[100px]">
      <template v-for="theme in themes">
        <!-- Gallery one widget -->
        <template v-if="theme.type == 'gallery' && theme.gallery_type == 'one'">
          <GalleryOne :images="theme.images" />
        </template>

        <!-- Gallery two widget -->
        <template
          v-else-if="theme.type == 'gallery' && theme.gallery_type == 'two'"
        >
          <GalleryTwo :images="theme.images" />
        </template>

        <!-- Category Slider -->
        <template v-else-if="theme.type == 'category_slider'">
          <CategoryCarousel />
        </template>

        <!-- Product Slider -->
        <template v-else-if="theme.type == 'product_slider'">
          <ProductCarousel :title="theme.title" :filters="theme.filters" />
        </template>
      </template>
    </div>
  </section>
</template>

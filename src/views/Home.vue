<script setup>
import ProductCarousel from "@/components/Products/Carousel.vue";
import Hero from "@/components/Hero/Index.vue";

const products = [
  {
    title: "All products",
    sort: 3,
    filters: {
      sort: "asc",
      limit: 10,
    },
  },
  {
    title: "Products",
    sort: 1,
    filters: {
      new: 1,
      sort: "asc",
      limit: 10,
    },
  },
  {
    title: "Feaured products",
    sort: 2,
    filters: {
      sort: "asc",
      limit: 10,
      featured: 1,
    },
  },
];
</script>

<template>
  <Hero />
  <section class="bg-white dark:bg-gray-900">
    <div class="px-[100px]">
      <ProductCarousel
        v-for="product in products"
        :title="product.title"
        :filters="product.filters"
      />
    </div>
  </section>
</template>

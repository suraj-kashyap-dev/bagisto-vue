<script setup>
import ProductCarousel from "@/components/Products/Carousel.vue";
import CategoryCarousel from "@/components/Category/Carousel.vue";
import Hero from "@/components/Hero/Index.vue";
import GalleryTwo from "@/components/Widgets/GalleryTwo.vue";
import GalleryOne from "@/components/Widgets/GalleryOne.vue";
const themes = [
  {
    type: "category_slider",
  },
  {
    type: "gallery",
    gallery_type: "one",
    images: [
      {
        link: "",
        src: "http://localhost/bagisto/public/storage/theme/5/F1cs5T5wAPlpXLf02lzpPXioJ2wx135xre9sDUlm.webp",
        alt: "Demo",
      },
      {
        link: "",
        src: "http://localhost/bagisto/public/storage/theme/5/wbK76qumpmhoxEMan9kXifXrr2yZqwe1ZL6mLj0O.webp",
        alt: "demo",
      },
      {
        link: "",
        src: "http://localhost/bagisto/public/storage/theme/5/LHFUMBlFNkLYiE0LHwHGWRQ3BdVyl0QqM0lRmYNN.webp",
        alt: "demo",
      },
      {
        link: "",
        src: "http://localhost/bagisto/public/storage/theme/5/Bz28BX3Be3dzWGKXY5uo2Xkqd8MpaueP8m7Wc6hx.webp",
        alt: "demo",
      },
      {
        link: "",
        src: "http://localhost/bagisto/public/storage/theme/5/OBYTQShXBypHJmHOIoy9t7f8kRadcKfQ1J3S0NhI.webp",
        alt: "demo",
      },
      {
        link: "",
        src: "http://localhost/bagisto/public/storage/theme/5/F1cs5T5wAPlpXLf02lzpPXioJ2wx135xre9sDUlm.webp",
        alt: "",
      },
    ],
  },
  {
    type: "gallery",
    gallery_type: "two",
    images: [
      "http://localhost/bagisto/public/storage/theme/5/F1cs5T5wAPlpXLf02lzpPXioJ2wx135xre9sDUlm.webp",
      "http://localhost/bagisto/public/storage/theme/5/wbK76qumpmhoxEMan9kXifXrr2yZqwe1ZL6mLj0O.webp",
      "http://localhost/bagisto/public/storage/theme/5/LHFUMBlFNkLYiE0LHwHGWRQ3BdVyl0QqM0lRmYNN.webp",
      "http://localhost/bagisto/public/storage/theme/5/Bz28BX3Be3dzWGKXY5uo2Xkqd8MpaueP8m7Wc6hx.webp",
      "http://localhost/bagisto/public/storage/theme/5/OBYTQShXBypHJmHOIoy9t7f8kRadcKfQ1J3S0NhI.webp",
      "http://localhost/bagisto/public/storage/theme/5/F1cs5T5wAPlpXLf02lzpPXioJ2wx135xre9sDUlm.webp",
    ],
  },

  {
    type: "product_slider",
    title: "All products",
    filters: {
      sort: "asc",
      limit: 10,
    },
  },
  {
    type: "gallery",
    gallery_type: "two",
    images: [
      "http://localhost/bagisto/public/storage/theme/5/wbK76qumpmhoxEMan9kXifXrr2yZqwe1ZL6mLj0O.webp",
      "http://localhost/bagisto/public/storage/theme/5/LHFUMBlFNkLYiE0LHwHGWRQ3BdVyl0QqM0lRmYNN.webp",
      "http://localhost/bagisto/public/storage/theme/5/Bz28BX3Be3dzWGKXY5uo2Xkqd8MpaueP8m7Wc6hx.webp",
      "http://localhost/bagisto/public/storage/theme/5/OBYTQShXBypHJmHOIoy9t7f8kRadcKfQ1J3S0NhI.webp",
      "http://localhost/bagisto/public/storage/theme/5/F1cs5T5wAPlpXLf02lzpPXioJ2wx135xre9sDUlm.webp",
      "http://localhost/bagisto/public/storage/theme/5/F1cs5T5wAPlpXLf02lzpPXioJ2wx135xre9sDUlm.webp",
    ],
  },
  {
    type: "product_slider",
    title: "Feaured Products",
    filters: {
      sort: "desc",
      limit: 10,
    },
  },
  {
    type: "product_slider",
    title: "New Products",
    filters: {
      sort: "asc",
      limit: 10,
    },
  },
];
</script>

<template>
  <Hero />
  <section class="bg-white dark:bg-gray-900">
    <div class="lg:px-[100px]">
      <template v-for="theme in themes">
        <template v-if="theme.type == 'gallery' && theme.gallery_type == 'one'">
          <GalleryOne :images="theme.images"> </GalleryOne>
        </template>
        <template
          v-else-if="theme.type == 'gallery' && theme.gallery_type == 'two'"
        >
          <GalleryTwo :images="theme.images" />
        </template>
        <template v-else-if="theme.type == 'category_slider'">
          <CategoryCarousel />
        </template>
        <template v-else-if="theme.type == 'product_slider'">
          <ProductCarousel :title="theme.title" :filters="theme.filters" />
        </template>
      </template>
    </div>
  </section>
</template>

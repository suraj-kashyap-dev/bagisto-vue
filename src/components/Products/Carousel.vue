<template>
  <div
    class="container mt-20 max-lg:px-8 max-sm:mt-8"
    v-if="!isLoading && products.length"
  >
    <div class="flex justify-between">
      <h2 class="text-3xl font-dmserif max-sm:text-2xl" v-text="title"></h2>

      <div class="flex gap-8 justify-between items-center">
        <span
          class="inline-block text-2xl cursor-pointer"
          role="button"
          aria-label="Previous"
          tabindex="0"
          @click="swipeLeft"
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </span>

        <span
          class="inline-block text-2xl cursor-pointer"
          role="button"
          aria-label="Next"
          tabindex="0"
          @click="swipeRight"
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </div>

    <div
      ref="swiperContainer"
      class="flex gap-8 [&>*]:flex-[0] mt-10 overflow-auto scroll-smooth scrollbar-hide max-sm:mt-5"
    >
      <ProductCard
        class="min-w-[291px]"
        v-for="product in products"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/Products/Card.vue";
export default {
  name: "ProductCarousel",
  props: ['title'],
  
  data() {
    return {
      isLoading: true,

      products: [],

      offset: 323,
    };
  },

  components: {
    ProductCard,
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      this.$axios
        .get("products?sort=asc&limit=10")
        .then((response) => {
          this.isLoading = false;

          this.products = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    swipeLeft() {
      const container = this.$refs.swiperContainer;

      container.scrollLeft -= this.offset;
    },

    swipeRight() {
      const container = this.$refs.swiperContainer;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += this.offset;
      }
    },
  },
};
</script>

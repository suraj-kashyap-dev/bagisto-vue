<template>
  <div
    class="container mt-14 max-lg:px-8 max-sm:mt-5"
    v-if="categories?.length"
  >
    <div class="relative">
      <div
        ref="swiperContainer"
        class="flex gap-10 overflow-auto scroll-smooth scrollbar-hide max-sm:gap-4"
      >
        <div
          class="grid grid-cols-1 gap-4 justify-items-center min-w-[120px] max-w-[120px] font-medium"
          v-for="category in categories"
        >
          <v-router-link
            :to="category.slug"
            class="w-[110px] h-[110px] bg-[#F5F5F5] rounded-full"
            :aria-label="category.name"
          >
            <template v-if="category.image_url">
              <img
                :src="category.image_url"
                width="110"
                height="110"
                class="w-[110px] h-[110px] rounded-full"
                :alt="category.name"
              />
            </template>
          </v-router-link>

          <a :href="category.slug" class="">
            <p
              class="text-center text-black text-lg max-sm:font-normal"
              v-text="category.name"
            ></p>
          </a>
        </div>
      </div>

      <span
        class="flex items-center justify-center absolute top-9 -left-10 w-[50px] h-[50px] bg-white border border-black rounded-full transition icon-arrow-left-stylish text-2xl hover:text-white max-lg:-left-7 cursor-pointer"
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
        class="flex items-center justify-center absolute top-9 -right-6 w-[50px] h-[50px] bg-white border border-black rounded-full transition icon-arrow-right-stylish text-2xl hover:text-white max-lg:-right-7 cursor-pointer"
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
</template>

<script>
import { useCategoriesStore } from "@/stores/modules/categories";
export default {
  name: "Category",

  data() {
    return {
      offset: 323,
    };
  },

  computed: {
    categories() {
      return useCategoriesStore().categories;
    },
  },

  methods: {
    swipeLeft() {
      const container = this.$refs.swiperContainer;

      container.scrollLeft -= this.offset;
    },

    swipeRight() {
      const container = this.$refs.swiperContainer;

      container.scrollLeft += this.offset;
    },
  },
};
</script>

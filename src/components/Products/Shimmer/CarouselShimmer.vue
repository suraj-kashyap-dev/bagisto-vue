<script setup>
import CardShimmer from "@/components/Products/Shimmer/CardShimmer.vue";
</script>

<template>
  <div class="container mt-20 max-lg:px-8 max-sm:mt-8">
    <div class="flex justify-between">
      <free-style-shimmer
        :is-loading="true"
        height="45px"
        width="200px"
        color="#bdbdbd"
      />

      <div class="flex gap-8 justify-between items-center">
        <free-style-shimmer
          :is-loading="true"
          height="24px"
          width="24px"
          color="#bdbdbd"
        />
        <free-style-shimmer
          :is-loading="true"
          height="24px"
          width="24px"
          color="#bdbdbd"
        />
      </div>
    </div>

    <div class="flex gap-8 mt-10 overflow-auto scrollbar-hide max-sm:mt-5">
      <CardShimmer />
    </div>

    <a
      class="shimmer block w-[150.172px] h-12 mt-14 mx-auto rounded-2xl"
      role="button"
      aria-label="Show more products"
    ></a>
  </div>
</template>

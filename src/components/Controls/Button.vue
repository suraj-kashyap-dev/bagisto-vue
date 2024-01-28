<script setup>
import { useButtonStore } from "@/stores/modules/button";

const isDisabled = useButtonStore();
</script>

<template>
  <button
    v-bind="$attrs"
    :disabled="isDisabled.isDisabled"
    class="text-white bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    :class="
      isDisabled.isDisabled
        ? 'bg-blue-400 dark:bg-blue-500 cursor-not-allowed'
        : '' + $attrs.class
    "
  >
    <slot />
  </button>
</template>

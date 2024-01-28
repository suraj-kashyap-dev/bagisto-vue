<script setup>
defineProps({
  controlName: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <vee-error-message :name="controlName" v-slot="{ message }">
    <p
      :class="'text-red-500 text-xs italic ' + $attrs.class"
      v-text="message"
    >
    </p>
  </vee-error-message>
</template>


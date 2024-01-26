<template>
  <vee-error-message :name="controlName" v-slot="{ message }">
    <p
      :class="'text-red-500 text-xs italic ' + $attrs.class"
      v-text="message"
    ></p>
  </vee-error-message>
</template>

<script>
export default {
  name: "Error",

  props: {
    controlName: {
      type: String,
      required: true,
    },
  },
};
</script>

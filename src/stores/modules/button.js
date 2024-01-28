import { defineStore } from "pinia";

export const useButtonStore = defineStore("button", {
  state: () => ({
    isDisabled: false,
  }),

  actions: {
    setState(state) {
      this.isDisabled = state;
    },
  },
});

import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: {},
  }),

  actions: {
    getCategories() {
        this.$axios.get('categories')
        .then((response) => {
          this.categories= response.data.data;
        })
        .catch(error => console.log(error));
    },
  },
});

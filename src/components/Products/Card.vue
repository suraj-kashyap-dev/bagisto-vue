<template>
  <div class="grid gap-2.5 content-start w-full relative">
    <div
      class="relative overflow-hidden group max-w-[291px] max-h-[300px] rounded"
    >
      <a :aria-label="product.name + ' '">
        <img
          class="relative after:content-[' '] after:block after:pb-[calc(100%+9px)] bg-[#F5F5F5] group-hover:scale-105 transition-all duration-300"
          :src="product.base_image.medium_image_url"
          :key="product.id"
          :index="product.id"
          width="291"
          height="300"
          :alt="product.name"
        />
      </a>
      <div class="action-items bg-black">
        <p
          class="inline-block absolute top-5 ltr:left-5 rtl:right-5 px-2.5 bg-[#E51A1A] rounded-[44px] text-white text-sm"
          v-if="product.on_sale"
        >
          Sale
        </p>

        <p
          class="inline-block absolute top-5 ltr:left-5 rtl:right-5 px-2.5 bg-navyBlue rounded-[44px] text-white text-sm"
          v-else-if="product.is_new"
        >
          New
        </p>

        <div
          class="group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <button
            class="absolute bottom-4 left-1/2 py-3 px-11 bg-white rounded-xl text-navyBlue text-xs w-max font-medium cursor-pointer -translate-x-1/2 translate-y-[54px] group-hover:translate-y-0 transition-all duration-300"
            :disabled="!product.is_saleable"
            @click="addToCart()"
            ref="addToCartButton"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>

    <div class="grid gap-2.5 content-start max-w-[291px]">
      <p class="text-base" v-text="product.name"></p>

      <div
        class="flex gap-2.5 items-center font-semibold text-lg"
        v-html="product.price_html"
      ></div>

      <!-- Needs to implement that in future -->
      <div class="hidden flex gap-4 mt-2">
        <span
          class="block w-[30px] h-[30px] bg-[#B5DCB4] rounded-full cursor-pointer"
        ></span>

        <span
          class="block w-[30px] h-[30px] bg-[#5C5C5C] rounded-full cursor-pointer"
        ></span>
      </div>
    </div>
  </div>
</template>
\

<script type="module">
export default {
  props: ["mode", "product"],

  data() {
    return {};
  },

  methods: {
    addToWishlist() {
      if (this.isCustomer) {
        this.$axios
          .post(`{{ route('shop.api.customers.account.wishlist.store') }}`, {
            product_id: this.product.id,
          })
          .then((response) => {
            this.product.is_wishlist = !this.product.is_wishlist;

            this.$emitter.emit("add-flash", {
              type: "success",
              message: response.data.data.message,
            });
          })
          .catch((error) => {});
      } else {
        window.location.href = "{{ route('shop.customer.session.index')}}";
      }
    },

    addToCompare(productId) {
      /**
       * This will handle for customers.
       */
      if (this.isCustomer) {
        this.$axios
          .post('{{ route("shop.api.compare.store") }}', {
            product_id: productId,
          })
          .then((response) => {
            this.$emitter.emit("add-flash", {
              type: "success",
              message: response.data.data.message,
            });
          })
          .catch((error) => {
            if ([400, 422].includes(error.response.status)) {
              this.$emitter.emit("add-flash", {
                type: "warning",
                message: error.response.data.data.message,
              });

              return;
            }

            this.$emitter.emit("add-flash", {
              type: "error",
              message: error.response.data.message,
            });
          });

        return;
      }

      /**
       * This will handle for guests.
       */
      let items = this.getStorageValue() ?? [];

      if (items.length) {
        if (!items.includes(productId)) {
          items.push(productId);

          localStorage.setItem("compare_items", JSON.stringify(items));

          this.$emitter.emit("add-flash", {
            type: "success",
            message:
              "@lang('shop::app.components.products.card.add-to-compare-success')",
          });
        } else {
          this.$emitter.emit("add-flash", {
            type: "warning",
            message:
              "@lang('shop::app.components.products.card.already-in-compare')",
          });
        }
      } else {
        localStorage.setItem("compare_items", JSON.stringify([productId]));

        this.$emitter.emit("add-flash", {
          type: "success",
          message:
            "@lang('shop::app.components.products.card.add-to-compare-success')",
        });
      }
    },

    getStorageValue(key) {
      let value = localStorage.getItem("compare_items");

      if (!value) {
        return [];
      }

      return JSON.parse(value);
    },

    addToCart() {
      this.$refs.addToCartButton.isLoading = true;

      this.$axios
        .post('{{ route("shop.api.checkout.cart.store") }}', {
          quantity: 1,
          product_id: this.product.id,
        })
        .then((response) => {
          if (response.data.data.redirect_uri) {
            window.location.href = response.data.data.redirect_uri;
          }

          if (response.data.message) {
            this.$emitter.emit("update-mini-cart", response.data.data);

            this.$emitter.emit("add-flash", {
              type: "success",
              message: response.data.message,
            });
          } else {
            this.$emitter.emit("add-flash", {
              type: "warning",
              message: response.data.data.message,
            });
          }

          this.$refs.addToCartButton.isLoading = false;
        })
        .catch((error) => {
          this.$refs.addToCartButton.isLoading = false;

          this.$emitter.emit("add-flash", {
            type: "error",
            message: response.data.message,
          });
        });
    },
  },
};
</script>
@endpushOnce

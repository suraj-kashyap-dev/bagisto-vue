<template>
  <div>
    <div class="select-none" ref="toggleBlock" @click="toggle()">
      <slot name="toggle">Toggle</slot>
    </div>

    <transition
      tag="div"
      name="dropdown"
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        class="absolute w-max z-10 overflow-hidden bg-white shadow-[0px_10px_84px_rgba(0,0,0,0.1)] rounded-[20px]"
        :style="positionStyles"
        v-show="isActive"
      >
        <slot name="content"></slot>

        <slot name="menu"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "DropdownIndex",
  props: {
    position: String,

    closeOnClick: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data() {
    return {
      toggleBlockWidth: 0,

      toggleBlockHeight: 0,

      isActive: false,
    };
  },

  created() {
    window.addEventListener("click", this.handleFocusOut);
  },

  mounted() {
    this.toggleBlockWidth = this.$refs.toggleBlock.clientWidth;

    this.toggleBlockHeight = this.$refs.toggleBlock.clientHeight;
  },

  beforeDestroy() {
    window.removeEventListener("click", this.handleFocusOut);
  },

  computed: {
    positionStyles() {
      switch (this.position) {
        case "bottom-left":
          return [
            `min-width: ${this.toggleBlockWidth}px`,
            `top: ${this.toggleBlockHeight}px`,
            "left: 0",
          ];

        case "bottom-right":
          return [
            `min-width: ${this.toggleBlockWidth}px`,
            `top: ${this.toggleBlockHeight}px`,
            "right: 0",
          ];

        case "top-left":
          return [
            `min-width: ${this.toggleBlockWidth}px`,
            `bottom: ${this.toggleBlockHeight}px`,
            "left: 0",
          ];

        case "top-right":
          return [
            `min-width: ${this.toggleBlockWidth}px`,
            `bottom: ${this.toggleBlockHeight}px`,
            "right: 0",
          ];

        default:
          return [
            `min-width: ${this.toggleBlockWidth}px`,
            `top: ${this.toggleBlockHeight}px`,
            "left: 0",
          ];
      }
    },
  },

  methods: {
    toggle() {
      /**
       * If still somehow width is zero then this will check for width one more time.
       */
      if (this.toggleBlockWidth === 0) {
        this.toggleBlockWidth = this.$refs.toggleBlock.clientWidth;
      }

      /**
       * If still somehow height is zero then this will check for height one more time.
       */
      if (this.toggleBlockHeight === 0) {
        this.toggleBlockHeight = this.$refs.toggleBlock.clientHeight;
      }

      this.isActive = !this.isActive;
    },

    handleFocusOut(e) {
      if (
        !this.$el.contains(e.target) ||
        (this.closeOnClick && this.$el.children[1].contains(e.target))
      ) {
        this.isActive = false;
      }
    },
  },
};
</script>

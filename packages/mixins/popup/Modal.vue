<template>
  <transition name="m-fade">
    <div
      v-show="visible"
      class="m-modal"
      :class="className"
      :style="style"
      @touchmove.prevent.stop
      @click="$emit('click', $event)"
    />
  </transition>
</template>

<script>
export default {
  name: 'modal',

  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },

  computed: {
    style() {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      };
    }
  }
};
</script>

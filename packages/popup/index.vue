<template>
  <transition :name="currentTransition">
    <div v-show="value" class="m-popup" :class="{ [`m-popup--${position}`]: position }">
      <slot />
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';

export default create({
  name: 'popup',

  mixins: [Popup],

  props: {
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },

  data() {
    const transition = this.transition || (this.position === '' ? 'm-fade' : `popup-slide-${this.position}`);
    return {
      currentValue: false,
      currentTransition: transition
    };
  }
});
</script>

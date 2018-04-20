<template>
  <div class="m-step m-hairline" :class="[`m-step--${$parent.direction}`, { [`m-step--${status}`]: status }]">
    <div class="m-step__circle-container">
      <i class="m-step__circle" v-if="status !== 'process'" />
      <icon v-else name="checked" :style="{ color: $parent.activeColor }" />
    </div>
    <div class="m-step__title" :style="titleStyle">
      <slot />
    </div>
    <div class="m-step__line" />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'step',

  beforeCreate() {
    this.$parent.steps.push(this);
  },

  computed: {
    status() {
      const index = this.$parent.steps.indexOf(this);
      const active = this.$parent.active;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }
    },

    titleStyle() {
      return this.status === 'process' ? {
        color: this.$parent.activeColor
      } : {};
    }
  }
});
</script>

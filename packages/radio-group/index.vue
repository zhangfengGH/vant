<template>
  <div class="m-radio-group">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'radio-group',

  props: {
    value: null,
    disabled: Boolean
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    }
  }
});
</script>

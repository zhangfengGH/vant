<template>
  <div class="m-cell-group" :class="{ 'm-hairline--top-bottom': border }">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create-basic';

export default create({
  name: 'cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
});
</script>

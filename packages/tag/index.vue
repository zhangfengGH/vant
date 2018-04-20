<template>
  <span
    class="m-tag m-hairline--surround"
    :class="{
      [`m-tag--${type}`]: type,
      'm-tag--plain': plain,
      'm-tag--mark': mark
    }"
  >
    <slot />
  </span>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'tag',
  props: {
    type: String,
    mark: Boolean,
    plain: Boolean
  }
});
</script>

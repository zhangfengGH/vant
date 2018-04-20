<template>
  <keep-alive>
    <m-number-keyboard v-if="showKeyboard" />
  </keep-alive>
</template>

<script>
export default {
  props: {
    showKeyboard: Boolean
  }
};
</script>

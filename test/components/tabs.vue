<template>
  <m-tabs
    :active="active"
    :duration="duration"
    :sticky="sticky"
    :swipeable="swipeable"
    @click="$emit('click')"
    @disabled="$emit('disabled')"
  >
    <m-tab :title="firstTabTitle" :disabled="firstTabDisabled">内容一</m-tab>
    <m-tab title="选项二">内容二</m-tab>
    <m-tab title="选项三" disabled>内容三</m-tab>
    <m-tab title="选项四">内容四</m-tab>
  </m-tabs>
</template>

<script>
export default {
  props: {
    firstTabTitle: {
      type: String,
      default: '选项一'
    },
    firstTabDisabled: {
      type: Boolean
    },
    sticky: Boolean,
    swipeable: Boolean
  },

  data() {
    return {
      active: 0,
      duration: 0.5
    };
  }
};
</script>

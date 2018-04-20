<template>
  <m-collapse v-model="active" :accordion="accordion">
    <m-collapse-item title="a" name="first">content</m-collapse-item>
    <m-collapse-item title="b">content</m-collapse-item>
    <m-collapse-item title="c">content</m-collapse-item>
  </m-collapse>
</template>

<script>
export default {
  props: {
    accordion: Boolean
  },

  data() {
    return {
      active: this.accordion ? '' : []
    };
  }
};
</script>

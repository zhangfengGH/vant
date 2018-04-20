<template>
  <m-radio-group v-model="radio">
    <m-radio name="1">单选框1</m-radio>
    <m-radio name="2">单选框2</m-radio>
  </m-radio-group>
</template>

<script>
export default {
  data() {
    return {
      radio: '1'
    };
  }
};
</script>

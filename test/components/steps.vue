<template>
  <m-steps :active="active">
    <m-step>买家下单</m-step>
    <m-step>商家接单</m-step>
    <m-step>买家提货</m-step>
    <m-step>交易完成</m-step>
  </m-steps>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    };
  }
};
</script>

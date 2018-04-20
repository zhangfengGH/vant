<template>
  <m-tabs :active="active">
    <m-tab title="选项一">内容一</m-tab>
    <m-tab title="选项二">内容二</m-tab>
    <m-tab title="选项三">内容三</m-tab>
    <m-tab title="选项四">内容四</m-tab>
    <m-tab title="选项五">内容五</m-tab>
    <m-tab title="选项六">内容六</m-tab>
    <m-tab title="选项七">内容七</m-tab>
    <m-tab title="选项八">内容八</m-tab>
  </m-tabs>
</template>

<script>
export default {
  props: {
    active: [String, Number]
  }
};
</script>

<template>
  <section class="m-doc-demo-block">
    <h2 class="m-doc-demo-block__title">{{ title }}</h2>
    <slot></slot>
  </section>  
</template>

<script>
export default {
  name: 'm-doc-demo-block',

  props: {
    title: String
  }
};
</script>

<style lang="postcss">
@import '../style/variable';

.m-doc-demo-block {
  &__title {
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    color: $m-doc-text-light-blue;
    padding: 40px 15px 15px;
  }

  &:first-of-type {
    .m-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>

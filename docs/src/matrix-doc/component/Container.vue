<template>
  <div class="m-doc-container m-doc-row" :class="{ 'm-doc-container--with-simulator': hasSimulator }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-doc-container',

  props: {
    hasSimulator: Boolean
  }
};
</script>

<style lang="postcss">
@import '../style/variable';

.m-doc-container {
  overflow: hidden;
  box-sizing: border-box;
  background-color: #fff;
  padding-left: 250px;

  &--with-simulator {
    padding-right: calc($m-doc-simulator-width + $m-doc-padding);

    @media (max-width: 1300px) {
      padding-right: calc($m-doc-simulator-small-width + $m-doc-padding);
    }
  }
}
</style>

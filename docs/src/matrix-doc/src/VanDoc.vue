<template>
  <div class="m-doc">
    <m-doc-header :config="config.header" active="移动端" />
    <m-doc-nav :navConfig="config.nav" :base="base" />
    <m-doc-container :hasSimulator="!!(simulator || simulators.length)">
      <m-doc-content>
        <slot></slot>
        <m-doc-footer-nav :navConfig="config.nav" :base="base" />
      </m-doc-content>
    </m-doc-container>
    <m-doc-simulator v-if="simulator" :src="simulator" />
    <m-doc-simulator
      v-for="(url, index) in simulators"
      v-show="index === currentSimulator"
      :src="url"
    />
  </div>
</template>

<script>
export default {
  name: 'm-doc',

  props: {
    config: {
      type: Object,
      required: true
    },
    currentSimulator: Number,
    simulator: String,
    simulators: {
      type: Array,
      default: () => {}
    },
    base: {
      type: String,
      default: '/component'
    }
  }
};
</script>

<style lang="postcss">
@import './style/index.css';
</style>

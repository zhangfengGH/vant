<template>
  <div class="app">
    <m-doc :simulators="simulators" :current-simulator="currentSimulator" :config="config" :base="base">
      <router-view @changeDemoURL="onChangeDemoURL" />
    </m-doc>
  </div>
</template>

<script>
import docConfig from './doc.config';

export default {
  data() {
    return {
      simulators: [`/zanui/matrix/examples${location.hash}`],
      demoURL: ''
    };
  },

  computed: {
    base() {
      return `/${this.$matrixLang}`;
    },

    config() {
      return docConfig[this.$matrixLang];
    },

    currentSimulator() {
      const { name } = this.$route;
      return name && name.indexOf('demo') !== -1 ? 1 : 0;
    }
  },

  methods: {
    onChangeDemoURL(url) {
      this.simulators = [this.simulators[0], url];
    }
  }
};
</script>

<style lang="postcss">
.m-doc-intro {
  text-align: center;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;

  &__youzan {
    width: 32px;
    height: 32px;
    display: block;
    margin: 25px 0 0;
  }

  &__logo {
    width: 120px;
    height: 120px;
  }

  h2 {
    font-size: 32px;
    line-height: 60px;
    font-weight: normal;
  }

  p {
    font-size: 15px;
    color: #455a64;
  }
}
</style>

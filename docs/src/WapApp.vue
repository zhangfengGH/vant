<template>
  <div>
    <m-nav-bar
      v-show="title"
      class="m-doc-nav-bar"
      :title="title"
      left-arrow
      @click-left="onBack"
    />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      const { name } = this.$route.meta;
      return name ? name.replace(/-/g, '') : '';
    }
  },

  methods: {
    onBack() {
      history.back();
    }
  }
};
</script>

<style lang="postcss">
body {
  color: #333;
  line-height: 1;
  background-color: #f8f8f8;
  font-family: Arial, Helvetica, "STHeiti STXihei", "Microsoft YaHei", Tohoma, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.m-doc-nav-bar {
  .m-nav-bar__title {
    font-size: 15px;
    text-transform: capitalize;
  }
}

.m-doc-demo-section {
  margin-top: -46px;
  padding-top: 46px;
}
</style>

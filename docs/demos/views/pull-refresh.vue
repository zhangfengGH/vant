<template>
  <demo-section name="pull-refresh">
    <m-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <demo-block :title="$t('basicUsage')">
        <p>{{ $t('text') }}: {{ count }}</p>
      </demo-block>
    </m-pull-refresh>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '刷新次数',
      success: '刷新成功'
    },
    'en-US': {
      text: 'Refresh Count',
      success: 'Refresh success'
    }
  },

  data() {
    return {
      count: 0,
      isLoading: false
    };
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast(this.$t('success'));
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>

<style lang="postcss">
.demo-pull-refresh {
  .m-pull-refresh {
    &,
    &__track {
      height: calc(100vh - 50px);
    }
  }

  p {
    margin: 10px 0 0 15px;
  }
}
</style>

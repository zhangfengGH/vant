<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <p class="page-desc">{{ $t('text') }}</p>
      <m-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <m-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <m-cell v-for="item in list" :key="item" :title="item + ''" />
        </m-list>
      </m-pull-refresh>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '当即将滚动到元素底部时，会自动加载更多'
    },
    'en-US': {
      text: 'This list will load items will scroll to bottom.'
    }
  },

  data() {
    return {
      list: [],
      refreshing: false,
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          const text = this.list.length + 1;
          this.list.push(text < 10 ? '0' + text : text);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },

    onRefresh() {
      setTimeout(() => {
        this.list = [];
        this.finished = false;
        this.refreshing = false;
        window.scrollTo(0, 10);
      }, 1000);
    }
  }
};
</script>

<style lang="postcss">
.demo-list {
  .m-cell {
    justify-content: center;
  }

  .page-desc {
    padding: 5px 0;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
    color: #666;
  }
}
</style>

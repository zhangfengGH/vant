<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <m-search :placeholder="$t('placeholder')" v-model="value" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <form action="/">
        <m-search
          v-model="value"
          :placeholder="$t('placeholder')"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </demo-block>

    <demo-block :title="$t('title3')">
      <m-search
        v-model="value"
        show-action
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">{{ $t('search') }}</div>
      </m-search>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '监听对应事件',
      title3: '自定义行动按钮',
      placeholder: '请输入商品名称'
    },
    'en-US': {
      title2: 'Listen to Events',
      title3: 'Custom Button',
      placeholder: 'Placeholder'
    }
  },

  data() {
    return {
      value: ''
    };
  },

  methods: {
    onSearch() {
      Toast(this.value);
    },
    onCancel() {
      Toast(this.$t('cancel'));
    }
  }
};
</script>

<style lang="postcss">
.demo-search {
  .m-search__action div {
    padding: 0 10px;
  }
}
</style>

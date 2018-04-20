<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <m-tabs v-model="active">
        <m-tab :title="$t('tab') + index" v-for="index in tabs" :key="index">
          {{ $t('content') }} {{ index }}
        </m-tab>
      </m-tabs>
    </demo-block>

    <demo-block :title="$t('title2')">
      <m-tabs>
        <m-tab v-for="index in 8" :title="$t('tab') + index" :key="index">
          {{ $t('content') }} {{ index }}
        </m-tab>
      </m-tabs>
    </demo-block>

    <demo-block :title="$t('title3')">
      <m-tabs @disabled="onClickDisabled">
        <m-tab v-for="index in 4" :title="$t('tab') + index" :disabled="index === 2" :key="index">
          {{ $t('content') }} {{ index }}
        </m-tab>
      </m-tabs>
    </demo-block>

    <demo-block :title="$t('title4')">
      <m-tabs type="card">
        <m-tab v-for="index in 4" :title="$t('tab') + index" :key="index">
          {{ $t('content') }} {{ index }}
        </m-tab>
      </m-tabs>
    </demo-block>

    <demo-block :title="$t('title5')">
      <m-tabs @click="onClick">
        <m-tab v-for="index in 4" :title="$t('tab') + index" :key="index">
          {{ $t('content') }} {{ index }}
        </m-tab>
      </m-tabs>
    </demo-block>

    <demo-block :title="$t('title6')">
      <m-tabs :active="active" sticky>
        <m-tab :title="$t('tab') + index" v-for="index in tabs" :key="index">
          {{ $t('content') }} {{ index }}
        </m-tab>
      </m-tabs>
    </demo-block>

    <demo-block :title="$t('title7')">
      <m-tabs :active="active">
        <m-tab v-for="index in 2" :key="index">
          <div slot="title">
            <m-icon name="more-o" />{{ $t('tab') }}
          </div>
          {{ $t('content') }} {{ index }}
        </m-tab>
      </m-tabs>
    </demo-block>

    <demo-block :title="$t('title8')">
      <m-tabs :active="active" swipeable>
        <m-tab :title="$t('tab') + index" v-for="index in tabs" :key="index">
          {{ $t('content') }} {{ index }}
        </m-tab>
      </m-tabs>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      tab: '选项 ',
      title2: '横向滚动',
      title3: '禁用标签',
      title4: '样式风格',
      title5: '点击事件',
      title6: '粘性布局',
      title7: '自定义标签',
      title8: '滑动切换',
      disabled: ' 已被禁用'
    },
    'en-US': {
      tab: 'Tab ',
      content: 'content of tab',
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky',
      title7: 'Custom Tab',
      title8: 'Swipeable',
      disabled: ' is disabled'
    }
  },

  data() {
    return {
      active: 2,
      tabs: [1, 2, 3, 4]
    };
  },

  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + this.$t('disabled'));
    },

    onClick(index, title) {
      this.$toast(title);
    }
  }
};
</script>

<style lang="postcss">
.demo-tab {
  margin-bottom: 300px;

  .m-tab .m-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .m-tab__pane {
    background-color: #fff;
    padding: 20px;
  }

  .m-tabs--card .m-tab__pane {
    background-color: transparent;
  }

  .custom-tabwrap .m-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .m-tabs-nav-bar {
    background: #20a0ff;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }

  .m-doc-demo-block:last-child {
    .m-tab__pane {
      padding: 50px 20px;
    }
  }
}
</style>

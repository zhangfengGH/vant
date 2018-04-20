<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <m-button type="default">{{ $t('default') }}</m-button>
      <m-button type="primary">{{ $t('primary') }}</m-button>
      <m-button type="danger">{{ $t('danger') }}</m-button>
    </demo-block>

    <demo-block :title="$t('title2')">
      <m-button size="large">{{ $t('large') }}</m-button>
      <m-button size="normal">{{ $t('normal') }}</m-button>
      <m-button size="small">{{ $t('small') }}</m-button>
      <m-button size="mini">{{ $t('mini') }}</m-button>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <m-button disabled>{{ $t('disabled') }}</m-button>
    </demo-block>

    <demo-block :title="$t('title3')">
      <m-button loading />
      <m-button loading type="primary" />
    </demo-block>

    <demo-block :title="$t('title4')">
      <m-button tag="a" href="https://www.youzan.com" target="_blank">
        {{ $t('button') }}
      </m-button>
    </demo-block>

    <demo-block :title="$t('title5')">
      <m-button type="primary" bottom-action>{{ $t('button') }}</m-button>

      <m-row>
        <m-col span="12">
          <m-button bottom-action>{{ $t('button') }}</m-button>
        </m-col>
        <m-col span="12">
          <m-button type="primary" bottom-action>{{ $t('button') }}</m-button>
        </m-col>
      </m-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '按钮类型',
      title2: '按钮尺寸',
      title3: '加载状态',
      title4: '自定义按钮标签',
      title5: '页面底部操作按钮',
      default: '默认按钮',
      primary: '主要按钮',
      danger: '危险按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮'
    },
    'en-US': {
      title1: 'Type',
      title2: 'Size',
      title3: 'Loading',
      title4: 'Custom Tag',
      title5: 'Action Button',
      default: 'Default',
      primary: 'Primary',
      danger: 'Danger',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini'
    }
  }
};
</script>

<style lang="postcss">
.demo-button {
  .m-button {
    user-select: none;

    &--large,
    &--bottom-action {
      margin-bottom: 15px;
    }

    &--small,
    &--normal {
      margin-right: 10px;
    }

    .m-loading {
      margin: 0 18px;
    }
  }

  .m-doc-demo-block {
    padding: 0 15px;
  }

  .m-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>

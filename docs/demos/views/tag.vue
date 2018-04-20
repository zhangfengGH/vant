<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <m-tag>{{ $t('tag') }}</m-tag>
      <m-tag type="danger">{{ $t('tag') }}</m-tag>
      <m-tag type="success">{{ $t('tag') }}</m-tag>
      <m-tag type="primary">{{ $t('tag') }}</m-tag>
    </demo-block>

    <demo-block :title="$t('title2')">
      <m-tag plain>{{ $t('tag') }}</m-tag>
      <m-tag plain type="danger">{{ $t('tag') }}</m-tag>
      <m-tag plain type="primary">{{ $t('tag') }}</m-tag>
      <m-tag plain type="success">{{ $t('tag') }}</m-tag>
    </demo-block>

    <demo-block :title="$t('title3')">
      <m-tag mark>{{ $t('tag') }}</m-tag>
      <m-tag mark type="danger">{{ $t('tag') }}</m-tag>
      <m-tag mark type="primary">{{ $t('tag') }}</m-tag>
      <m-tag mark type="success">{{ $t('tag') }}</m-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '空心样式',
      title3: '标记样式'
    },
    'en-US': {
      title2: 'Plain style',
      title3: 'Mark style'
    }
  }
};
</script>

<style lang="postcss">
.demo-tag {
  .m-tag + .m-tag {
    margin-left: 10px;
  }

  .m-tag {
    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>

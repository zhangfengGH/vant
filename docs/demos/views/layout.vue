<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <m-row>
        <m-col span="8">span: 8</m-col>
        <m-col span="8">span: 8</m-col>
        <m-col span="8">span: 8</m-col>
      </m-row>

      <m-row>
        <m-col span="4">span: 4</m-col>
        <m-col span="10" offset="4">offset: 4, span: 10</m-col>
      </m-row>

      <m-row>
        <m-col offset="12" span="12">offset: 12, span: 12</m-col>
      </m-row>
    </demo-block>

    <demo-block :title="$t('title2')">
      <m-row gutter="20">
        <m-col span="8">span: 8</m-col>
        <m-col span="8">span: 8</m-col>
        <m-col span="8">span: 8</m-col>
      </m-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距'
    },
    'en-US': {
      title2: 'Column Spacing'
    }
  }
};
</script>

<style lang="postcss">
.demo-layout {
  .m-doc-demo-block {
    padding: 0 15px;
  }

  .m-doc-demo-block__title {
    padding-left: 0;
  }

  .m-col {
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>

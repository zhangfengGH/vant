<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <m-loading color="black" />
      <m-loading color="white" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <m-loading type="spinner" color="black" />
      <m-loading type="spinner" color="white" />
    </demo-block>

    <demo-block :title="$t('title3')">
      <m-loading type="circle" color="black" />
      <m-loading type="circle" color="white" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: 'Circular',
      title2: 'Spinner',
      title3: 'Circle'
    },
    'en-US': {
      title1: 'Circular',
      title2: 'Spinner',
      title3: 'Circle'
    }
  }
};
</script>

<style lang="postcss">
.demo-loading {
  .m-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;
  }

  .m-loading--white {
    padding: 10px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, .5);
  }
}
</style>

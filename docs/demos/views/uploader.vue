<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="demo-uploader-container">
        <m-uploader :max-size="102400" @oversize="logContent('oversize')">
          <m-icon name="photograph" />
        </m-uploader>
      </div>
    </demo-block>

    <demo-block :title="$t('title2')">
      <div class="demo-uploader-container">
        <m-uploader accept="image/gif, image/jpeg" multiple :max-size="36000" @oversize="logContent">
          <m-icon name="photograph" />
        </m-uploader>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '设置 input 属性'
    },
    'en-US': {
      title2: 'Set input attr'
    }
  },

  methods: {
    logContent(file) {
      console.log(file);
    }
  }
};
</script>

<style lang="postcss">
.demo-uploader {
  &-container {
    padding: 10px 20px;
    font-size: 20px;
  }
}
</style>

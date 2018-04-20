<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <m-button @click="showImagePreview">{{ $t('button1') }}</m-button>
    </demo-block>

    <demo-block :title="$t('button2')">
      <m-button @click="showImagePreview(1)">{{ $t('button2') }}</m-button>
    </demo-block>

    <demo-block :title="$t('button3')">
      <m-button @click="showImagePreview(0, 1000)">{{ $t('button3') }}</m-button>
    </demo-block>
  </demo-section>
</template>

<script>
import { ImagePreview } from 'packages';

export default {
  i18n: {
    'zh-CN': {
      button1: '预览图片',
      button2: '指定初始位置',
      button3: '手动关闭'
    },
    'en-US': {
      button1: 'Show Images',
      button2: 'Custom Start Position',
      button3: 'Close Manually'
    }
  },

  methods: {
    showImagePreview(position, timer) {
      const instance = ImagePreview([
        'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png',
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ], typeof position === 'number' ? position : 0);

      if (timer) {
        setTimeout(() => {
          instance.close();
        }, timer);
      }
    }
  }
};
</script>

<style lang="postcss">
.demo-image-preview {
  .m-button {
    margin-left: 15px;
  }
}
.m-image-preview {
  img {
    pointer-events: none;
  }
}
</style>

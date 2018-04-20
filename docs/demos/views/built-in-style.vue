<template>
  <demo-section>
    <demo-block :title="$t('ellipsis')">
      <div class="m-ellipsis">{{ $t('text') }}</div>
    </demo-block>

    <demo-block :title="$t('hairline')">
      <div class="m-hairline--top" />
    </demo-block>

    <demo-block :title="$t('animation')">
      <m-switch-cell v-model="show" :title="$t('toggle')" :border="false" />
      <m-row>
        <transition name="m-fade">
          <m-col span="8" v-show="show">Fade</m-col>
        </transition>

        <transition name="m-slide-bottom">
          <m-col span="8" v-show="show">Slide Bottom</m-col>
        </transition>
      </m-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      hairline: '1px 边框',
      ellipsis: '文字省略',
      animation: '动画',
      toggle: '切换动画',
      text: '这是一段宽度限制 250px 的文字，后面的内容会省略'
    },
    'en-US': {
      hairline: 'Hairline',
      ellipsis: 'Text Ellipsis',
      animation: 'Animation',
      toggle: 'Switch animation',
      text: 'This is a paragraph of 250px width limit, the back will be omitted.'
    }
  },

  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="postcss">
.demo-built-in-style {
  .m-ellipsis {
    font-size: 13px;
    margin-left: 15px;
    max-width: 250px;
  }

  .m-hairline--top {
    height: 30px;
    background-color: #fff;

    &::after {
      top: 15px;
    }
  }

  .m-col {
    height: 50px;
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
    text-align: center;
    line-height: 50px;
    margin-left: 15px;
    background-color: #39a9ed;
  }

  .m-switch-cell {
    margin-bottom: 15px;
  }
}
</style>

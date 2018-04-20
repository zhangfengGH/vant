<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <m-radio-group v-model="radio1" class="demo-radio-group">
        <m-radio name="1">{{ $t('radio') }} 1</m-radio>
        <m-radio name="2">{{ $t('radio') }} 2</m-radio>
      </m-radio-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <m-radio-group v-model="radio2" class="demo-radio-group" disabled>
        <m-radio name="1">{{ $t('radio') }} 1</m-radio>
        <m-radio name="2">{{ $t('radio') }} 2</m-radio>
      </m-radio-group>
    </demo-block>

    <demo-block :title="$t('title3')">
      <m-radio-group v-model="radio3">
        <m-cell-group>
          <m-cell><m-radio name="1">{{ $t('radio') }}1</m-radio></m-cell>
          <m-cell><m-radio name="2">{{ $t('radio') }}2</m-radio></m-cell>
        </m-cell-group>
      </m-radio-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      radio: '单选框',
      text1: '未选中禁用',
      text2: '选中且禁用',
      title3: '与 Cell 组件一起使用'
    },
    'en-US': {
      radio: 'Radio',
      text1: 'Disabled',
      text2: 'Disabled and checked',
      title: 'Inside a Cell'
    }
  },

  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1'
    };
  }
};
</script>

<style lang="postcss">
.demo-radio {
  &-group {
    padding: 0 17px;

    .m-radio {
      margin-bottom: 10px;
    }
  }

  .m-cell {
    .m-radio__input {
      float: right;
      position: static;
    }

    .m-radio__label {
      margin: 0;
    }
  }
}
</style>

<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <m-cell-group>
        <m-cell :title="$t('cell')" :value="$t('content')" />
        <m-cell :title="$t('cell')" :value="$t('content')" :label="$t('desc')" />
      </m-cell-group>
    </demo-block>

    <demo-block :title="$t('title2')">
      <m-cell-group>
        <m-cell :value="$t('content')" />
      </m-cell-group>
    </demo-block>

    <demo-block :title="$t('title3')">
      <m-cell-group>
        <m-cell :title="$t('cell')" icon="location" />
      </m-cell-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <m-cell-group>
        <m-cell :title="$t('cell')" is-link />
        <m-cell :title="$t('cell')" is-link :value="$t('content')" />
      </m-cell-group>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <m-cell-group>
        <m-cell :value="$t('content')" icon="shop" is-link>
          <template slot="title">
            <span class="m-cell-text">{{ $t('cell') }}</span>
            <m-tag type="danger">{{ $t('tag') }}</m-tag>
          </template>
        </m-cell>
        <m-cell :title="$t('cell')" icon="location" is-link />
        <m-cell :title="$t('cell')">
          <m-icon slot="right-icon" name="search" class="m-cell__right-icon" />
        </m-cell>
      </m-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      title2: '只设置 value',
      title3: '展示图标',
      title4: '展示箭头'
    },
    'en-US': {
      cell: 'Cell title',
      title2: 'Value only',
      title3: 'Left Icon',
      title4: 'Link'
    }
  }
};
</script>

<style lang="postcss">
.demo-cell {
  .m-cell-text {
    margin-right: 5px;
  }

  .m-cell-text,
  .m-tag--danger {
    vertical-align: middle;
  }
}
</style>

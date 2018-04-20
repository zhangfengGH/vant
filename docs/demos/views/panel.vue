<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <m-panel :title="$t('title')" :desc="$t('desc')" :status="$t('status')">
        <div>{{ $t('content') }}</div>
      </m-panel>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <m-panel :title="$t('title')" :desc="$t('desc')" :status="$t('status')">
        <div>{{ $t('content') }}</div>
        <div slot="footer">
          <m-button size="small">{{ $t('button') }}</m-button>
          <m-button size="small" type="danger">{{ $t('button') }}</m-button>
        </div>
      </m-panel>
    </demo-block>
  </demo-section>
</template>

<style lang="postcss">
.demo-panel {
  .m-panel__footer {
    text-align: right;

    .m-button {
      margin-left: 5px;
    }
  }

  .m-panel__content {
    padding: 20px;
  }
}
</style>

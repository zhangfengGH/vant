<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <m-cell-group>
        <m-switch-cell v-model="checked" :title="$t('title')" />
      </m-cell-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <m-cell-group>
        <m-switch-cell v-model="checked" disabled :title="$t('title')" />
      </m-cell-group>
    </demo-block>

    <demo-block :title="$t('loading')">
      <m-cell-group>
        <m-switch-cell v-model="checked" loading :title="$t('title')" />
      </m-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>

<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <m-picker :columns="$t('column1')" @change="onChange1" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <m-picker :columns="$t('column2')" />
    </demo-block>

    <demo-block :title="$t('title3')">
      <m-picker
        show-toolbar
        :title="$t('area')"
        :columns="$t('column1')"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </demo-block>

    <demo-block :title="$t('title4')">
      <m-picker :columns="columns" @change="onChange2" />
    </demo-block>

    <demo-block :title="$t('loading')">
      <m-picker :columns="columns" loading />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      area: '标题',
      title2: '禁用选项',
      title3: '展示顶部栏',
      title4: '多列联动',
      column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      column2: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' }
      ],
      column3: {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州']
      },
      toastContent: (value, index) => `当前值：${value}, 当前索引：${index}`
    },
    'en-US': {
      area: 'Title',
      title2: 'Disable Option',
      title3: 'Show Toolbar',
      title4: 'Multi Columns',
      column1: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
      column2: [
        { text: 'Delaware', disabled: true },
        { text: 'Florida' },
        { text: 'Georqia' }
      ],
      column3: {
        Group1: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
        Group2: ['Alabama', 'Kansas', 'Louisiana', 'Texas']
      },
      toastContent: (value, index) => `Value: ${value}, Index：${index}`
    }
  },

  computed: {
    columns() {
      const column = this.$t('column3');
      return [
        {
          values: Object.keys(column),
          className: 'column1'
        },
        {
          values: column[Object.keys(column)[0]],
          className: 'column2',
          defaultIndex: 2
        }
      ];
    }
  },

  methods: {
    onChange1(picker, value, index) {
      Toast(this.$t('toastContent', value, index));
    },
    onChange2(picker, values) {
      picker.setColumnValues(1, this.$t('column3')[values[0]]);
    },
    onConfirm(value, index) {
      Toast(this.$t('toastContent', value, index));
    },
    onCancel() {
      Toast(this.$t('cancel'));
    }
  }
};
</script>

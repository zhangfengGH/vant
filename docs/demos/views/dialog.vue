<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <m-button @click="onClickAlert">Alert</m-button>
      <m-button @click="onClickAlert2">{{ $t('alert2') }}</m-button>
    </demo-block>

    <demo-block :title="$t('title2')">
      <m-button @click="onClickConfirm">Confirm</m-button>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <m-button @click="show = true">{{ $t('advancedUsage') }}</m-button>
      <m-dialog
        v-model="show"
        show-cancel-button
        :before-close="beforeClose"
      >
        <m-field
          v-model="username"
          :label="$t('username')"
          :placeholder="$t('usernamePlaceholder')"
        />
        <m-field
          v-model="password"
          type="password"
          :label="$t('password')"
          :placeholder="$t('passwordPlaceholder')"
        />
      </m-dialog>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '消息提示',
      title2: '消息确认',
      alert2: '无标题 Alert'
    },
    'en-US': {
      title1: 'Alert dialog',
      title2: 'Confirm dialog',
      alert2: 'Alert without title'
    }
  },

  data() {
    return {
      show: false,
      username: '',
      password: ''
    };
  },

  methods: {
    onClickAlert() {
      Dialog.alert({
        title: this.$t('title'),
        message: this.$t('content')
      });
    },

    onClickAlert2() {
      Dialog.alert({
        message: this.$t('content')
      });
    },

    onClickConfirm() {
      Dialog.confirm({
        title: this.$t('title'),
        message: this.$t('content')
      });
    },

    beforeClose(action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    }
  }
};
</script>

<style lang="postcss">
.demo-dialog {
  .m-doc-demo-block > .m-button {
    margin: 15px;
  }
}
</style>

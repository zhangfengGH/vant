<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <m-steps :active="active">
        <m-step>{{ $t('step1') }}</m-step>
        <m-step>{{ $t('step2') }}</m-step>
        <m-step>{{ $t('step3') }}</m-step>
        <m-step>{{ $t('step4') }}</m-step>
      </m-steps>

      <m-button @click="nextStep">{{ $t('nextStep') }}</m-button>
    </demo-block>

    <demo-block :title="$t('title2')">
      <m-steps
        :active="active"
        icon="logistics"
        icon-class="steps-success"
        :title="$t('title')"
        :description="$t('desc')"
      >
        <m-step>{{ $t('step1') }}</m-step>
        <m-step>{{ $t('step2') }}</m-step>
        <m-step>{{ $t('step3') }}</m-step>
        <m-step>{{ $t('step4') }}</m-step>
      </m-steps>
    </demo-block>

    <demo-block :title="$t('title3')">
      <m-steps direction="vertical" :active="0" active-color="#f60">
        <m-step>
          <h3>{{ $t('status1') }}</h3>
          <p>2016-07-12 12:40</p>
        </m-step>
        <m-step>
          <h3>{{ $t('status2') }}</h3>
          <p>2016-07-11 10:00</p>
        </m-step>
        <m-step>
          <h3>{{ $t('status3') }}</h3>
          <p>2016-07-10 09:30</p>
        </m-step>
      </m-steps>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      nextStep: '下一步',
      step1: '买家下单',
      step2: '商家接单',
      step3: '买家提货',
      step4: '交易完成',
      title2: '描述信息',
      title3: '竖向步骤条',
      status1: '【城市】物流状态1',
      status2: '【城市】物流状态',
      status3: '快件已发货'
    },
    'en-US': {
      nextStep: 'Next Step',
      step1: 'Step1',
      step2: 'Step2',
      step3: 'Step3',
      step4: 'Step4',
      title2: 'Description',
      title3: 'Vertical Steps',
      status1: '【City】Status1',
      status2: '【City】Status2',
      status3: '【City】Status3'
    }
  },

  data() {
    return {
      active: 0
    };
  },

  methods: {
    nextStep() {
      this.active = ++this.active % 4;
    }
  }
};
</script>

<style lang="postcss">
.demo-steps {
  .steps-success,
  .m-icon-location {
    color: #06bf04;
  }

  .m-button {
    margin: 15px 0 0 15px;
  }

  .m-steps__message + p {
    margin-bottom: 10px;
  }

  p,
  h3 {
    margin: 0;
    font-size: inherit;
    font-weight: normal;
  }
}
</style>

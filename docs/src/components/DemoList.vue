<template>
  <div class="side-nav">
    <h1 class="zanui-title">
      <img src="https://m.lvmama.com/favicon.ico" >
      <span>matrix</span>
    </h1>
    <!-- <div class="mobile-switch-lang">
      <span :class="{ active: $matrixLang === 'en-US' }" @click="switchLang('en-US')">EN</span>
      <span :class="{ active: $matrixLang === 'zh-CN' }" @click="switchLang('zh-CN')">中文</span>
    </div> -->
    <h2 class="zanui-desc">{{ description }}</h2>
    <div class="mobile-navs">
      <div class="mobile-nav-item" v-for="(item, index) in navList" v-if="item.showInMobile" :key="index">
        <mobile-nav v-for="(group, index) in item.groups" :group="group" :base="$matrixLang" :nav-key="index" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import docConfig from '../doc.config';
import MobileNav from './MobileNav';
import { setLang } from '../utils/lang';

export default {
  data() {
    return {
      docConfig
    };
  },

  components: {
    MobileNav
  },

  computed: {
    navList() {
      return this.docConfig[this.$matrixLang].nav || [];
    },

    description() {
      return this.$matrixLang === 'zh-CN' ? '驴妈妈移动端 Vue 组件库' : 'A Vue.js 2.0 Mobile UI at YouZan';
    }
  },

  methods: {
    switchLang(lang) {
      const from = lang === 'zh-CN' ? 'en-US' : 'zh-CN';
      this.$router.push(this.$route.path.replace(from, lang));
      setLang(lang);
    }
  }
};
</script>

<style lang="postcss">
@import '../../../packages/matrix-css/src/common/var.css';

.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding: 60px 15px 20px;

  .zanui-title,
  .zanui-desc {
    text-align: center;
    font-weight: normal;
    user-select: none;
  }

  .zanui-title {
    margin: 0 0 15px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 36px;
    }

    span {
      font-size: 40px;
      margin-left: 15px;
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }
  }

  .zanui-desc {
    font-size: 14px;
    color: #455a64;
    margin: 0 0 60px;
  }
}

.mobile-switch-lang {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 11px;
  border: 1px solid $blue;
  border-radius: 3px;
  color: $blue;
  cursor: pointer;

  span {
    width: 32px;
    line-height: 22px;
    text-align: center;
    display: inline-block;

    &.active {
      color: #fff;
      background-color: $blue;
    }
  }
}
</style>

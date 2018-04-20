import Vue from 'vue';
import deepAssign from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

const proto = Vue.prototype;
const defaultLang = 'zh-CN';
const locale = {
  install() {
    if (proto.$matrixLang) {
      return;
    }
    Vue.util.defineReactive(proto, '$matrixLang', defaultLang);
    Vue.util.defineReactive(proto, '$matrixMessages', { [defaultLang]: defaultMessages });
  },

  use(lang, messages) {
    proto.$matrixLang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$matrixMessages, messages);
  }
};

locale.install();

export default locale;

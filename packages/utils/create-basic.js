/**
 * Create a basic component with common options
 */
import '../locale';
import i18n from '../mixins/i18n';

const install = function(Vue) {
  Vue.component(this.name, this);
};

export default function(sfc) {
  sfc.name = 'm-' + sfc.name;
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n);

  return sfc;
};

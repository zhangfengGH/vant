// This file is auto gererated by build/bin/build-entry.js
import progress from 'nprogress';

function wrapper(component) {
  return function(r) {
    progress.start();
    component(r).then(() => {
      progress.done();
    }).catch(() => {
      progress.done();
    });
  };
}

export default {
  'zh-CN/actionsheet': wrapper(r => require.ensure([], () => r(require('./zh-CN/actionsheet.md')), 'zh-CN/actionsheet')),
  'zh-CN/area': wrapper(r => require.ensure([], () => r(require('./zh-CN/area.md')), 'zh-CN/area')),
  'zh-CN/built-in-style': wrapper(r => require.ensure([], () => r(require('./zh-CN/built-in-style.md')), 'zh-CN/built-in-style')),
  'zh-CN/button': wrapper(r => require.ensure([], () => r(require('./zh-CN/button.md')), 'zh-CN/button')),
  'zh-CN/cell-swipe': wrapper(r => require.ensure([], () => r(require('./zh-CN/cell-swipe.md')), 'zh-CN/cell-swipe')),
  'zh-CN/cell': wrapper(r => require.ensure([], () => r(require('./zh-CN/cell.md')), 'zh-CN/cell')),
  'zh-CN/changelog-generated': wrapper(r => require.ensure([], () => r(require('./zh-CN/changelog-generated.md')), 'zh-CN/changelog-generated')),
  'zh-CN/changelog': wrapper(r => require.ensure([], () => r(require('./zh-CN/changelog.md')), 'zh-CN/changelog')),
  'zh-CN/checkbox': wrapper(r => require.ensure([], () => r(require('./zh-CN/checkbox.md')), 'zh-CN/checkbox')),
  'zh-CN/circle': wrapper(r => require.ensure([], () => r(require('./zh-CN/circle.md')), 'zh-CN/circle')),
  'zh-CN/collapse': wrapper(r => require.ensure([], () => r(require('./zh-CN/collapse.md')), 'zh-CN/collapse')),
  'zh-CN/datetime-picker': wrapper(r => require.ensure([], () => r(require('./zh-CN/datetime-picker.md')), 'zh-CN/datetime-picker')),
  'zh-CN/dialog': wrapper(r => require.ensure([], () => r(require('./zh-CN/dialog.md')), 'zh-CN/dialog')),
  'zh-CN/field': wrapper(r => require.ensure([], () => r(require('./zh-CN/field.md')), 'zh-CN/field')),
  'zh-CN/i18n': wrapper(r => require.ensure([], () => r(require('./zh-CN/i18n.md')), 'zh-CN/i18n')),
  'zh-CN/icon': wrapper(r => require.ensure([], () => r(require('./zh-CN/icon.md')), 'zh-CN/icon')),
  'zh-CN/image-preview': wrapper(r => require.ensure([], () => r(require('./zh-CN/image-preview.md')), 'zh-CN/image-preview')),
  'zh-CN/intro': wrapper(r => require.ensure([], () => r(require('./zh-CN/intro.md')), 'zh-CN/intro')),
  'zh-CN/layout': wrapper(r => require.ensure([], () => r(require('./zh-CN/layout.md')), 'zh-CN/layout')),
  'zh-CN/lazyload': wrapper(r => require.ensure([], () => r(require('./zh-CN/lazyload.md')), 'zh-CN/lazyload')),
  'zh-CN/list': wrapper(r => require.ensure([], () => r(require('./zh-CN/list.md')), 'zh-CN/list')),
  'zh-CN/loading': wrapper(r => require.ensure([], () => r(require('./zh-CN/loading.md')), 'zh-CN/loading')),
  'zh-CN/nav-bar': wrapper(r => require.ensure([], () => r(require('./zh-CN/nav-bar.md')), 'zh-CN/nav-bar')),
  'zh-CN/notice-bar': wrapper(r => require.ensure([], () => r(require('./zh-CN/notice-bar.md')), 'zh-CN/notice-bar')),
  'zh-CN/number-keyboard': wrapper(r => require.ensure([], () => r(require('./zh-CN/number-keyboard.md')), 'zh-CN/number-keyboard')),
  'zh-CN/pagination': wrapper(r => require.ensure([], () => r(require('./zh-CN/pagination.md')), 'zh-CN/pagination')),
  'zh-CN/password-input': wrapper(r => require.ensure([], () => r(require('./zh-CN/password-input.md')), 'zh-CN/password-input')),
  'zh-CN/picker': wrapper(r => require.ensure([], () => r(require('./zh-CN/picker.md')), 'zh-CN/picker')),
  'zh-CN/popup': wrapper(r => require.ensure([], () => r(require('./zh-CN/popup.md')), 'zh-CN/popup')),
  'zh-CN/pull-refresh': wrapper(r => require.ensure([], () => r(require('./zh-CN/pull-refresh.md')), 'zh-CN/pull-refresh')),
  'zh-CN/quickstart': wrapper(r => require.ensure([], () => r(require('./zh-CN/quickstart.md')), 'zh-CN/quickstart')),
  'zh-CN/radio': wrapper(r => require.ensure([], () => r(require('./zh-CN/radio.md')), 'zh-CN/radio')),
  'zh-CN/search': wrapper(r => require.ensure([], () => r(require('./zh-CN/search.md')), 'zh-CN/search')),
  'zh-CN/stepper': wrapper(r => require.ensure([], () => r(require('./zh-CN/stepper.md')), 'zh-CN/stepper')),
  'zh-CN/steps': wrapper(r => require.ensure([], () => r(require('./zh-CN/steps.md')), 'zh-CN/steps')),
  'zh-CN/swipe': wrapper(r => require.ensure([], () => r(require('./zh-CN/swipe.md')), 'zh-CN/swipe')),
  'zh-CN/switch-cell': wrapper(r => require.ensure([], () => r(require('./zh-CN/switch-cell.md')), 'zh-CN/switch-cell')),
  'zh-CN/switch': wrapper(r => require.ensure([], () => r(require('./zh-CN/switch.md')), 'zh-CN/switch')),
  'zh-CN/tab': wrapper(r => require.ensure([], () => r(require('./zh-CN/tab.md')), 'zh-CN/tab')),
  'zh-CN/tabbar': wrapper(r => require.ensure([], () => r(require('./zh-CN/tabbar.md')), 'zh-CN/tabbar')),
  'zh-CN/tag': wrapper(r => require.ensure([], () => r(require('./zh-CN/tag.md')), 'zh-CN/tag')),
  'zh-CN/theme': wrapper(r => require.ensure([], () => r(require('./zh-CN/theme.md')), 'zh-CN/theme')),
  'zh-CN/toast': wrapper(r => require.ensure([], () => r(require('./zh-CN/toast.md')), 'zh-CN/toast')),
  'zh-CN/tree-select': wrapper(r => require.ensure([], () => r(require('./zh-CN/tree-select.md')), 'zh-CN/tree-select')),
  'zh-CN/uploader': wrapper(r => require.ensure([], () => r(require('./zh-CN/uploader.md')), 'zh-CN/uploader'))
};

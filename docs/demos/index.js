// This file is auto gererated by build/bin/build-entry.js
import './common';

import progress from 'nprogress';

function asyncWrapper(component) {
  return function(r) {
    progress.start();
    component(r).then(() => {
      progress.done();
    }).catch(() => {
      progress.done();
    });
  };
}

function componentWrapper(component, name) {
  component = component.default;
  component.name = 'demo-' + name;
  return component;
}

export default {
  'actionsheet': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/actionsheet'), 'actionsheet')), 'actionsheet')),
  'area': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/area'), 'area')), 'area')),
  'built-in-style': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/built-in-style'), 'built-in-style')), 'built-in-style')),
  'button': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/button'), 'button')), 'button')),
  'cell-swipe': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/cell-swipe'), 'cell-swipe')), 'cell-swipe')),
  'cell': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/cell'), 'cell')), 'cell')),
  'checkbox': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/checkbox'), 'checkbox')), 'checkbox')),
  'circle': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/circle'), 'circle')), 'circle')),
  'collapse': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/collapse'), 'collapse')), 'collapse')),
  'datetime-picker': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/datetime-picker'), 'datetime-picker')), 'datetime-picker')),
  'dialog': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/dialog'), 'dialog')), 'dialog')),
  'field': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/field'), 'field')), 'field')),
  'icon': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/icon'), 'icon')), 'icon')),
  'image-preview': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/image-preview'), 'image-preview')), 'image-preview')),
  'layout': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/layout'), 'layout')), 'layout')),
  'lazyload': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/lazyload'), 'lazyload')), 'lazyload')),
  'list': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/list'), 'list')), 'list')),
  'loading': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/loading'), 'loading')), 'loading')),
  'nav-bar': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/nav-bar'), 'nav-bar')), 'nav-bar')),
  'notice-bar': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/notice-bar'), 'notice-bar')), 'notice-bar')),
  'number-keyboard': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/number-keyboard'), 'number-keyboard')), 'number-keyboard')),
  'pagination': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/pagination'), 'pagination')), 'pagination')),
  'panel': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/panel'), 'panel')), 'panel')),
  'password-input': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/password-input'), 'password-input')), 'password-input')),
  'picker': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/picker'), 'picker')), 'picker')),
  'popup': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/popup'), 'popup')), 'popup')),
  'pull-refresh': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/pull-refresh'), 'pull-refresh')), 'pull-refresh')),
  'radio': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/radio'), 'radio')), 'radio')),
  'search': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/search'), 'search')), 'search')),
  'stepper': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/stepper'), 'stepper')), 'stepper')),
  'steps': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/steps'), 'steps')), 'steps')),
  'swipe': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/swipe'), 'swipe')), 'swipe')),
  'switch-cell': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/switch-cell'), 'switch-cell')), 'switch-cell')),
  'switch': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/switch'), 'switch')), 'switch')),
  'tab': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/tab'), 'tab')), 'tab')),
  'tabbar': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/tabbar'), 'tabbar')), 'tabbar')),
  'tag': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/tag'), 'tag')), 'tag')),
  'toast': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/toast'), 'toast')), 'toast')),
  'tree-select': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/tree-select'), 'tree-select')), 'tree-select')),
  'uploader': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/uploader'), 'uploader')), 'uploader'))
};

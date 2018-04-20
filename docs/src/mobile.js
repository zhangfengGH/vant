import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './WapApp';
import routes from './router';
import matrix, { Lazyload } from 'packages';
import matrixDoc from './matrix-doc';
import 'packages/matrix-css/src/index.css';
import 'packages/matrix-css/src/icon-local.css';
import './matrix-doc/src/helper/touch-simulator';
import './components/nprogress.css';

Vue
  .use(matrix)
  .use(matrixDoc)
  .use(VueRouter)
  .use(Lazyload, {
    lazyComponent: true
  });

const router = new VueRouter({
  mode: 'hash',
  base: '/zanui/matrix/examples',
  routes: routes(true)
});

router.afterEach(() => {
  if (router.currentRoute.name) {
    window.scrollTo(0, 0);
  }
  if (!router.currentRoute.redirectedFrom) {
    Vue.nextTick(() => window.syncPath());
  }
});

window.vueRouter = router;

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  el: '#app'
});

import Vue from 'vue';
import matrix from 'packages';
require('packages/matrix-css/src/index.css');

Vue.use(matrix);

// hack for test touch event
window.ontouchstart = {};

// 读取配置文件，判断运行单个测试文件还是所有测试文件
const testsReq = require.context('./specs', true, /\.spec$/);
if (process.env.TEST_FILE) {
  testsReq.keys().forEach((file) => {
    if (file.indexOf(process.env.TEST_FILE) !== -1) {
      testsReq(file);
    }
  });
} else {
  testsReq.keys().forEach(testsReq);
}

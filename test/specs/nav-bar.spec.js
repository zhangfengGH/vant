import NavBar from 'packages/nav-bar';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';

describe('NavBar', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a NavBar', () => {
    wrapper = mount(NavBar, {
      propsData: {
        title: '标题',
        leftText: '返回',
        rightText: '按钮',
        leftArrow: true
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.m-nav-bar__title': '标题',
        '.m-nav-bar__left .m-nav-bar__text': '返回',
        '.m-nav-bar__right .m-nav-bar__text': '按钮'
      },
      count: {
        '.m-nav-bar__arrow': 1
      }
    });
    expect(wrapper.hasClass('m-nav-bar')).to.be.true;
  });

  it('NavBar fixed', () => {
    wrapper = mount(NavBar, {
      propsData: {
        fixed: true
      }
    });

    expect(wrapper.hasClass('m-nav-bar')).to.be.true;
  });
});

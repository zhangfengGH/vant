import SwitchCell from 'packages/switch-cell';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';

describe('SwitchCell', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('default', () => {
    wrapper = mount(SwitchCell, {
      attachToDocument: true
    });

    DOMChecker(wrapper, {
      count: {
        '.m-switch--on': 0,
        '.m-switch--disabled': 0
      }
    });
  });

  it('set title', () => {
    wrapper = mount(SwitchCell, {
      attachToDocument: true,
      propsData: {
        title: '测试标题'
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.m-cell__title span': '测试标题'
      },
      count: {
        '.m-switch--on': 0,
        '.m-switch--disabled': 0
      }
    });
  });

  it('checked', () => {
    wrapper = mount(SwitchCell, {
      attachToDocument: true,
      propsData: {
        value: true
      }
    });

    DOMChecker(wrapper, {
      count: {
        '.m-switch--on': 1,
        '.m-switch--disabled': 0
      }
    });
  });

  it('disabled', () => {
    wrapper = mount(SwitchCell, {
      attachToDocument: true,
      propsData: {
        disabled: true
      }
    });

    DOMChecker(wrapper, {
      count: {
        '.m-switch--on': 0,
        '.m-switch--disabled': 1
      }
    });
  });

  it('listen to change event', (done) => {
    wrapper = mount(SwitchCell, {
      attachToDocument: true,
      propsData: {
        value: false
      }
    });

    wrapper.vm.$on('input', (value) => {
      wrapper.vm.value = value;
    });

    wrapper.vm.$on('change', (value) => {
      expect(value).to.be.true;
      done();
    });

    const switchEl = wrapper.find('.m-switch')[0];
    switchEl.trigger('click');
  });
});

import NumberKeyboard from 'packages/number-keyboard';
import NumberKeyboardKeepAlive from '../components/number-keyboard';
import { mount } from 'avoriaz';
import { triggerTouch } from '../utils';

function mockKeyDown(wrapper, keyIndex) {
  const key = wrapper.element.querySelectorAll('.m-key')[keyIndex];
  const touchStart = document.createEvent('CustomEvent');
  touchStart.initCustomEvent('touchstart', true, true, {});
  key.dispatchEvent(touchStart);
}

function mockKeyUp(wrapper, keyIndex) {
  const key = wrapper.element.querySelectorAll('.m-key')[keyIndex];
  const touchEnd = document.createEvent('CustomEvent');
  touchEnd.initCustomEvent('touchend', true, true, {});
  key.dispatchEvent(touchEnd);
}

describe('NumberKeyboard', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a NumberKeyboard', () => {
    wrapper = mount(NumberKeyboard, {});
    expect(wrapper.hasClass('m-number-keyboard')).to.be.true;
  });

  it('click a keyboard key', (done) => {
    wrapper = mount(NumberKeyboard, {
      propsData: {
        theme: 'custom',
        closeButtonText: 'close'
      }
    });

    // just for coverage
    wrapper.vm.handler(true);

    wrapper.vm.$on('input', value => {
      mockKeyUp(wrapper, 0);
      expect(value).to.equal(1);
      done();
    });

    mockKeyDown(wrapper, 12); // close
    mockKeyDown(wrapper, 10); // empty
    mockKeyDown(wrapper, 0); // 1
  });

  it('click delete key', (done) => {
    wrapper = mount(NumberKeyboard, {});

    const deleteSpy = sinon.spy();
    wrapper.vm.$on('delete', deleteSpy);

    mockKeyDown(wrapper, 11);
    wrapper.vm.$nextTick(() => {
      expect(deleteSpy.calledOnce).to.be.true;
      done();
    });
  });

  it('blur keyboard', (done) => {
    wrapper = mount(NumberKeyboard, {
      attachToDocument: true
    });

    const blur = sinon.spy();
    wrapper.vm.$on('blur', blur);

    triggerTouch(document.body, 'touchstart');
    wrapper.vm.$nextTick(() => {
      expect(blur.calledOnce).to.be.true;
      done();
    });
  });

  it('listen to show event when has transtion', (done) => {
    wrapper = mount(NumberKeyboard, {
      attachToDocument: true
    });

    const show = sinon.spy();
    wrapper.vm.$on('show', show);
    wrapper.vm.show = true;
    wrapper.trigger('animationend');

    setTimeout(() => {
      expect(show.calledOnce).to.be.true;
      done();
    }, 100);
  });

  it('listen to show event when no transtion', (done) => {
    wrapper = mount(NumberKeyboard, {
      attachToDocument: true,
      propsData: {
        transition: false
      }
    });

    const show = sinon.spy();
    wrapper.vm.$on('show', show);
    wrapper.vm.show = true;

    wrapper.vm.$nextTick(() => {
      expect(show.calledOnce).to.be.true;
      done();
    });
  });

  it('listen to hide event when has transtion', (done) => {
    wrapper = mount(NumberKeyboard, {
      attachToDocument: true,
      propsData: {
        show: true
      }
    });

    const hide = sinon.spy();
    wrapper.vm.$on('hide', hide);
    wrapper.vm.show = false;
    wrapper.trigger('animationend');

    setTimeout(() => {
      expect(hide.calledOnce).to.be.true;
      done();
    }, 100);
  });

  it('listen to hide event when no transtion', (done) => {
    wrapper = mount(NumberKeyboard, {
      attachToDocument: true,
      propsData: {
        show: true,
        transition: false
      }
    });

    const hide = sinon.spy();
    wrapper.vm.$on('hide', hide);
    wrapper.vm.show = false;

    wrapper.vm.$nextTick(() => {
      expect(hide.calledOnce).to.be.true;
      done();
    });
  });

  it('keey-alive live cycle', (done) => {
    wrapper = mount(NumberKeyboardKeepAlive, {
      attachToDocument: true,
      propsData: {
        showKeyboard: true
      }
    });

    expect(wrapper.find('.m-number-keyboard').length).to.equal(1);

    wrapper.vm.showKeyboard = false;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.m-number-keyboard').length).to.equal(0);
      done();
    });
  });
});

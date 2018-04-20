import PullRefresh from 'packages/pull-refresh';
import { mount } from 'avoriaz';
import { triggerTouch } from '../utils';

describe('PullRefresh', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a PullRefresh', () => {
    wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    });

    expect(wrapper.hasClass('m-pull-refresh')).to.be.true;
  });

  // it('change head content when pulling down', (done) => {
  it('change head content when pulling down', () => {
    wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    });

    const track = wrapper.find('.m-pull-refresh__track')[0];
    triggerTouch(track, 'touchstart', 0, 0);
    triggerTouch(track, 'touchmove', 0, 10);

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.m-pull-refresh__text')[0].text()).to.equal('下拉即可刷新...');

      triggerTouch(track, 'touchmove', 0, 30);
      triggerTouch(track, 'touchmove', 0, 60);
      triggerTouch(track, 'touchmove', 0, 100);

      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.m-pull-refresh__text')[0].text()).to.equal('释放即可刷新...');

        triggerTouch(track, 'touchend', 0, 100);

        wrapper.vm.$nextTick(() => {
          expect(wrapper.find('.m-pull-refresh__loading span')[1].text()).to.equal('加载中...');
          // done();
        });
      });
    });
  });

  it('change loading status when pulling down', (done) => {
    wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    });

    const refreshSpy = sinon.spy();
    wrapper.vm.$on('refresh', refreshSpy);

    wrapper.vm.$on('input', value => {
      wrapper.vm.value = value;

      setTimeout(() => {
        wrapper.vm.value = false;
        expect(refreshSpy.calledOnce).to.be.true;
        setTimeout(() => {
          expect(wrapper.vm.status).to.equal('normal');
          done();
        }, 0);
      }, 30);
    });

    const track = wrapper.find('.m-pull-refresh__track')[0];
    triggerTouch(track, 'touchstart', 0, 0);
    triggerTouch(track, 'touchmove', 0, 100);
    triggerTouch(track, 'touchend', 0, 100);

    expect(wrapper.vm.value).to.be.true;
    expect(wrapper.vm.status).to.equal('loading');

    // ignore touch event when loading
    triggerTouch(track, 'touchstart', 0, 0);
    triggerTouch(track, 'touchmove', 0, 100);
    triggerTouch(track, 'touchend', 0, 100);
  });

  it('pull a short distance', () => {
    wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    });

    const track = wrapper.find('.m-pull-refresh__track')[0];
    triggerTouch(track, 'touchstart', 0, 0);
    triggerTouch(track, 'touchmove', 0, 10);
    triggerTouch(track, 'touchend', 0, 10);

    expect(wrapper.vm.value).to.be.false;
    expect(wrapper.vm.status).to.equal('normal');
  });

  it('not in page top', () => {
    wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    });

    window.scrollTop = 100;

    const track = wrapper.find('.m-pull-refresh__track')[0];
    // ignore touch event when not at page top
    triggerTouch(track, 'touchstart', 0, 0);
    triggerTouch(track, 'touchmove', 0, 100);
    triggerTouch(track, 'touchend', 0, 100);
    expect(wrapper.vm.ceiling).to.be.false;

    window.scrollTop = 0;
    triggerTouch(track, 'touchmove', 0, 100);
    expect(wrapper.vm.ceiling).to.be.true;
  });

  it('horizontal direction', () => {
    wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    });

    const track = wrapper.find('.m-pull-refresh__track')[0];
    triggerTouch(track, 'touchstart', 0, 0);
    triggerTouch(track, 'touchmove', 10, 0);
    triggerTouch(track, 'touchend', 10, 0);
    expect(wrapper.vm.direction).to.equal('horizontal');
  });
});

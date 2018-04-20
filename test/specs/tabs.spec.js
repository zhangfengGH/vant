import Tabs from 'packages/tabs';
import { mount } from 'avoriaz';
import TabsTestComponent from '../components/tabs';
import MoreTabsTestComponent from '../components/more-tabs';
import { triggerTouch } from '../utils';

describe('Tabs', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a empty card tabs', () => {
    wrapper = mount(Tabs, {
      propsData: {
        type: 'card'
      }
    });

    expect(wrapper.hasClass('m-tabs')).to.be.true;
    expect(wrapper.hasClass('m-tabs--card')).to.be.true;
  });

  it('create a tabs with four tab', (done) => {
    wrapper = mount(TabsTestComponent);

    expect(wrapper.hasClass('m-tabs')).to.be.true;
    expect(wrapper.hasClass('m-tabs--line')).to.be.true;

    const tabsContainer = wrapper.find('.m-tabs')[0];
    expect(tabsContainer.vNode.child.curActive).to.equal(0);

    wrapper.vm.active = 1;
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(tabsContainer.vNode.child.curActive).to.equal(1);
      done();
    });
  });

  it('listen click event', (done) => {
    wrapper = mount(TabsTestComponent, {
      attachToDocument: true
    });

    const clickSpy = sinon.spy();
    wrapper.vm.$on('click', clickSpy);

    wrapper.vm.$nextTick(() => {
      const nTab = wrapper.find('.m-tab')[0];
      nTab.trigger('click');
      expect(clickSpy.calledOnce).to.be.true;
      done();
    });
  });

  it('listen click disable event', (done) => {
    wrapper = mount(TabsTestComponent, {
      attachToDocument: true
    });

    const clickDisabledSpy = sinon.spy();
    wrapper.vm.$on('disabled', clickDisabledSpy);

    wrapper.vm.$nextTick(() => {
      const nTab = wrapper.find('.m-tab')[2];
      nTab.trigger('click');
      expect(clickDisabledSpy.calledOnce).to.be.true;
      done();
    });
  });

  it('check animation duration', () => {
    wrapper = mount(TabsTestComponent);

    expect(wrapper.style.transitionDuration != '').to.be.true;
  });

  it('create a tabs greater then 4', (done) => {
    wrapper = mount(MoreTabsTestComponent, {
      attachToDocument: true
    });
 
    wrapper.vm.$nextTick(() => {
      const nTab = wrapper.find('.m-tab')[4];
      nTab.trigger('click');
      done();
    });
  });

  it('create a tabs greater then 4 then click last tab', (done) => {
    wrapper = mount(MoreTabsTestComponent, {
      attachToDocument: true,
      propsData: {
        active: 7
      }
    });

    wrapper.vm.$nextTick(() => {
      const nTab = wrapper.find('.m-tab')[6];
      nTab.trigger('click');
      done();
    });
  });

  it('watch tab props changes', (done) => {
    wrapper = mount(TabsTestComponent);
    wrapper.vm.firstTabTitle = '测试标题';
    wrapper.vm.firstTabDisabled = true;

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.m-tab')[0].text().replace(/\n|\s/g, '')).to.equal('测试标题');
      done();
    });
  });

  it('create a sticky tabs', (done) => {
    wrapper = mount(TabsTestComponent, {
      attachToDocument: true,
      propsData: {
        sticky: true
      }
    });

    wrapper.vm.sticky = false;

    setTimeout(() => {
      expect(wrapper.vm.$children[0].position).to.equal('content-top');
      done();
    }, 30);
  });

  it('create a swipeable tabs', (done) => {
    wrapper = mount(TabsTestComponent, {
      attachToDocument: true,
      propsData: {
        swipeable: true
      }      
    });

    const tabsContainer = wrapper.find('.m-tabs')[0];
    const tabContent = wrapper.find('.m-tabs__content')[0];

    expect(tabsContainer.vNode.child.curActive).to.equal(0);

    wrapper.vm.$nextTick(() => {
      triggerTouch(tabContent, 'touchstart', 0, 0);
      triggerTouch(tabContent, 'touchmove', -100, 0);
      triggerTouch(tabContent, 'touchend', 0, 0);
  
      setTimeout(() => {
        expect(tabsContainer.vNode.child.curActive).to.equal(1);
  
        triggerTouch(tabContent, 'touchstart', 0, 0);
        triggerTouch(tabContent, 'touchmove', 100, 0);
        triggerTouch(tabContent, 'touchend', 0, 0);
        
        setTimeout(() => {
          expect(tabsContainer.vNode.child.curActive).to.equal(0);
          done();      
        }, 500);
      }, 500);
    })
  });
});

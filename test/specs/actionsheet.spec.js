import ActionSheet from 'packages/actionsheet';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';

describe('ActionSheet', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a actionsheet', () => {
    wrapper = mount(ActionSheet, {
      propsData: {}
    });

    expect(wrapper.hasClass('m-actionsheet')).to.be.true;
    expect(wrapper.instance().actions.length).to.equal(0);
    expect(wrapper.instance().overlay).to.be.true;
    expect(wrapper.instance().closeOnClickOverlay).to.be.true;
  });

  it('create displayed actionsheet', () => {
    wrapper = mount(ActionSheet, {
      propsData: {
        value: true
      }
    });

    DOMChecker(wrapper, {
      noStyle: {
        '.m-actionsheet': {
          display: 'none'
        }
      }
    });
  });

  it('create title type actionsheet', () => {
    wrapper = mount(ActionSheet, {
      propsData: {
        title: 'test'
      }
    });

    expect(wrapper.hasClass('m-actionsheet--withtitle')).to.be.true;
    expect(wrapper.contains('.m-actionsheet__header')).to.be.true;
    expect(wrapper.contains('.m-actionsheet__content')).to.be.true;
  });

  it('create actions actionsheet', () => {
    wrapper = mount(ActionSheet, {
      propsData: {
        actions: [
          {
            name: '驴妈妈E卡',
            subname: '（剩余260.50元）'
          },
          {
            name: '信用卡支付',
            loading: true
          }
        ]
      }
    });

    const actionItems = wrapper.find('.m-actionsheet__item');

    expect(actionItems.length).to.equal(2);
    expect(actionItems[0].contains('.m-actionsheet__name')).to.be.true;
    expect(actionItems[0].contains('.m-actionsheet__subname')).to.be.true;
    expect(actionItems[1].contains('.m-actionsheet__loading')).to.be.true;
  });

  it('handle actionsheet item click with callback', () => {
    let called = false;
    wrapper = mount(ActionSheet, {
      propsData: {
        actions: [
          {
            name: '驴妈妈E卡',
            callback: () => {
              called = true;
            }
          },
          {
            name: '微信'
          }
        ]
      }
    });

    const actionItem = wrapper.find('.m-actionsheet__item')[0];
    actionItem.trigger('click');
    expect(called).to.be.true;

    const secondActionItem = wrapper.find('.m-actionsheet__item')[1];
    secondActionItem.trigger('click');
  });

  it('create actionsheet with cancel button', () => {
    wrapper = mount(ActionSheet, {
      propsData: {
        cancelText: 'cancel'
      }
    });

    const cancelButton = wrapper.find('.m-actionsheet__cancel')[0];
    expect(wrapper.contains('.m-actionsheet__cancel')).to.be.true;
    expect(cancelButton.text()).to.equal('cancel');
    
    const eventStub = sinon.stub(wrapper.vm, '$emit');
    cancelButton.trigger('click');

    expect(eventStub.calledWith('cancel'));
  });

  it('toggle actionsheet value from v-model', (done) => {
    wrapper = mount(ActionSheet, {
      propsData: {
        value: false
      }
    });

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    DOMChecker(wrapper, {
      style: {
        '.m-actionsheet': {
          display: 'none'
        }
      }
    });

    wrapper.vm.value = true;
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      DOMChecker(wrapper, {
        noStyle: {
          '.m-actionsheet': {
            display: 'none'
          }
        }
      });
      expect(eventStub.calledWith('input'));
      done();
    });
  });
});

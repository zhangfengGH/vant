import Loading from 'packages/loading';
import { mount } from 'avoriaz';

describe('Loading', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create default', () => {
    wrapper = mount(Loading);

    expect(wrapper.hasClass('m-loading')).to.be.true;
  });

  it('create gradient-circle black', () => {
    wrapper = mount(Loading, {
      propsData: {
        type: 'gradient-circle',
        color: 'black'
      }
    });
    const spinner = wrapper.find('.m-loading__spinner')[0];

    expect(spinner.hasClass('m-loading__spinner--gradient-circle')).to.be.true;
  });

  it('create gradient-circle white', () => {
    wrapper = mount(Loading, {
      propsData: {
        type: 'gradient-circle',
        color: 'white'
      }
    });
    const spinner = wrapper.find('.m-loading__spinner')[0];

    expect(spinner.hasClass('m-loading__spinner--gradient-circle')).to.be.true;
  });

  it('create circle black', () => {
    wrapper = mount(Loading, {
      propsData: {
        type: 'circle',
        color: 'black'
      }
    });
    const spinner = wrapper.find('.m-loading__spinner')[0];

    expect(spinner.hasClass('m-loading__spinner--circle')).to.be.true;
  });

  it('create circle white', () => {
    wrapper = mount(Loading, {
      propsData: {
        type: 'circle',
        color: 'white'
      }
    });
    const spinner = wrapper.find('.m-loading__spinner')[0];

    expect(spinner.hasClass('m-loading__spinner--circle')).to.be.true;
  });

  it('loading size', () => {
    wrapper = mount(Loading, {
      propsData: {
        size: '100px'
      }
    });
    expect(wrapper.vm.$el.style.width).to.equal('100px');
    expect(wrapper.vm.$el.style.height).to.equal('100px');
  });
});

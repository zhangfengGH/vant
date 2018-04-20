import Icon from 'packages/icon';
import { mount } from 'avoriaz';

describe('Icon', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a icon', () => {
    wrapper = mount(Icon, {
      propsData: {
        name: 'arrow'
      }
    });

    expect(wrapper.hasClass('m-icon')).to.be.true;
    expect(wrapper.hasClass('m-icon-arrow')).to.be.true;
  });
});

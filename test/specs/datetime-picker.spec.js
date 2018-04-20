import DatetimePicker from 'packages/datetime-picker';
import { mount } from 'avoriaz';
import { dragHelper } from '../utils';

const testTime = '10:00';
const testDate = new Date('2017/03/10 10:00');
const minDate = new Date('2000/01/01 00:00');
const maxDate = new Date('3000/01/01 00:00');

describe('DatetimePicker', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a time picker', () => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'time',
        value: testTime
      }
    });
    expect(wrapper.vm.innerValue).to.equal(testTime);
  });

  it('create a date picker', () => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'date',
        value: testDate
      }
    });
    expect(wrapper.vm.innerValue.getTime()).to.equal(testDate.getTime());
  });

  it('create a year-month', () => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'year-month',
        value: testDate
      }
    });
    expect(wrapper.vm.innerValue.getTime()).to.equal(testDate.getTime());
  });

  it('create a datetime picker', () => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'datetime',
        value: testDate
      }
    });
    expect(wrapper.vm.innerValue.getTime()).to.equal(testDate.getTime());
  });

  it('drag time picker', (done) => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'time',
        value: '12:00'
      }
    });

    const [hour, minute] = wrapper.find('.m-picker-column ul');
    dragHelper(hour, 0, -50);
    dragHelper(minute, 0, -50);

    setTimeout(() => {
      expect(wrapper.vm.innerValue).to.equal('1:01');
      done();
    }, 50);
  });

  it('drag date picker', (done) => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'date',
        value: testDate,
        minDate,
        maxDate
      }
    });

    setTimeout(() => {
      const [year, month, day] = wrapper.find('.m-picker-column ul');
      dragHelper(year, 0, -50);
      dragHelper(month, 0, -50);
      dragHelper(day, 0, -50);
      setTimeout(() => {
        const newYear = wrapper.vm.innerValue.getFullYear();
        const newMonth = wrapper.vm.innerValue.getMonth() + 1;
        const newDay = wrapper.vm.innerValue.getDate();
        expect(newYear).to.equal(2018);
        expect(newMonth).to.equal(4);
        expect(newDay).to.equal(11);
        done();
      }, 10);
    }, 10);
  });

  it('drag year-month picker', (done) => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'year-month',
        value: testDate,
        minDate,
        maxDate
      }
    });

    setTimeout(() => {
      const [year, month] = wrapper.find('.m-picker-column ul');
      dragHelper(year, 0, -50);
      dragHelper(month, 0, -50);
      setTimeout(() => {
        const newYear = wrapper.vm.innerValue.getFullYear();
        const newMonth = wrapper.vm.innerValue.getMonth() + 1;
        expect(newYear).to.equal(2018);
        expect(newMonth).to.equal(4);
        done();
      }, 10);
    }, 10);
  });

  it('drag datetime picker', (done) => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'datetime',
        value: testDate,
        minDate,
        maxDate
      }
    });

    setTimeout(() => {
      const [year, month, day, hour, minute] = wrapper.find('.m-picker-column ul');
      dragHelper(year, 0, -50);
      dragHelper(month, 0, -50);
      dragHelper(day, 0, -50);
      dragHelper(hour, 0, -50);
      dragHelper(minute, 0, -50);
      setTimeout(() => {
        const newYear = wrapper.vm.innerValue.getFullYear();
        const newMonth = wrapper.vm.innerValue.getMonth() + 1;
        const newDay = wrapper.vm.innerValue.getDate();
        const newHour = wrapper.vm.innerValue.getHours();
        const newMinute = wrapper.vm.innerValue.getMinutes();
        expect(newYear).to.equal(2018);
        expect(newMonth).to.equal(4);
        expect(newDay).to.equal(11);
        expect(newHour).to.equal(11);
        expect(newMinute).to.equal(1);
        done();
      }, 10);
    }, 10);
  });
});

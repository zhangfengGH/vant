
<template>
  <div
    class="m-picker-column"
    :class="className"
    :style="columnStyle"
    @touchstart="onTouchStart"
    @touchmove.prevent="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <ul :style="wrapperStyle">
      <li
        v-for="(option, index) in options"
        v-text="getOptionText(option)"
        class="m-ellipsis"
        :class="{
          'm-picker-column--disabled': isDisabled(option),
          'm-picker-column--selected': index === currentIndex
        }"
        @click="setIndex(index, true)"
      />
    </ul>
  </div>
</template>

<script>
import create from '../utils/create';
import { isObj } from '../utils';

const DEFAULT_DURATION = 200;
const range = (num, arr) => Math.min(Math.max(num, arr[0]), arr[1]);

export default create({
  name: 'picker-column',

  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    visibleItemCount: Number,
    options: {
      type: Array,
      default: () => []
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      currentIndex: this.defaultIndex
    };
  },

  created() {
    this.$parent && this.$parent.children.push(this);
  },

  mounted() {
    this.setIndex(this.currentIndex);
  },

  destroyed() {
    this.$parent && this.$parent.children.splice(this.$parent.children.indexOf(this), 1);
  },

  watch: {
    defaultIndex() {
      this.setIndex(this.defaultIndex);
    },

    options(next, prev) {
      if (JSON.stringify(next) !== JSON.stringify(prev)) {
        this.setIndex(0);
      }
    }
  },

  computed: {
    count() {
      return this.options.length;
    },

    baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2;
    },

    columnStyle() {
      return {
        height: (this.itemHeight * this.visibleItemCount) + 'px'
      };
    },

    wrapperStyle() {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0, ${this.offset + this.baseOffset}px, 0)`,
        lineHeight: this.itemHeight + 'px'
      };
    },

    currentValue() {
      return this.options[this.currentIndex];
    }
  },

  methods: {
    onTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.startOffset = this.offset;
      this.duration = 0;
    },

    onTouchMove(event) {
      const deltaY = event.touches[0].clientY - this.startY;
      this.offset = range(this.startOffset + deltaY, [
        -(this.count * this.itemHeight),
        this.itemHeight
      ]);
    },

    onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        const index = range(Math.round(-this.offset / this.itemHeight), [
          0,
          this.count - 1
        ]);
        this.setIndex(index, true);
      }
    },

    adjustIndex(index) {
      index = range(index, [0, this.count]);
      for (let i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(this.options[i])) return i;
      }
    },

    isDisabled(option) {
      return isObj(option) && option.disabled;
    },

    getOptionText(option) {
      return isObj(option) && this.valueKey in option ? option[this.valueKey] : option;
    },

    setIndex(index, userAction) {
      index = this.adjustIndex(index);
      this.offset = -index * this.itemHeight;

      if (index !== this.currentIndex) {
        this.currentIndex = index;
        userAction && this.$emit('change', index);
      }
    },

    setValue(value) {
      const { options } = this;
      for (let i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          this.setIndex(i);
          return;
        }
      }
    }
  }
});
</script>

<template>
  <transition name="m-slide-bottom">
    <div class="m-actionsheet" :class="{ 'm-actionsheet--withtitle': title }" v-show="value">
      <div class="m-actionsheet__header m-hairline--top-bottom" v-if="title">
        <div v-text="title" />
        <icon name="close" @click="handleCancel" />
      </div>
      <ul v-else class="m-hairline--bottom">
        <li
          v-for="(item, index) in actions"
          :key="index"
          class="m-actionsheet__item m-hairline--top"
          :class="[item.className, { 'm-actionsheet__item--loading': item.loading }]"
          @click.stop="onClickItem(item)"
        >
          <template v-if="!item.loading">
            <span class="m-actionsheet__name">{{ item.name }}</span>
            <span class="m-actionsheet__subname" v-if="item.subname">{{ item.subname }}</span>
          </template>
          <loading v-else class="m-actionsheet__loading" size="20px" />
        </li>
      </ul>
      <div
        v-if="cancelText"
        v-text="cancelText"
        class="m-actionsheet__item m-actionsheet__cancel m-hairline--top"
        @click="handleCancel"
      />
      <div v-else class="m-actionsheet__content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';

export default create({
  name: 'actionsheet',

  mixins: [Popup],

  props: {
    value: Boolean,
    title: String,
    cancelText: String,
    actions: {
      type: Array,
      default: () => []
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onClickItem(item) {
      if (typeof item.callback === 'function') {
        item.callback(item);
      }
    },

    handleCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    }
  }
});
</script>

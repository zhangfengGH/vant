<template>
  <div
    class="m-cell"
    :class="{
      'm-hairline': border,
      'm-cell--center': center,
      'm-cell--required': required,
      'm-cell--clickable': isLink || clickable
    }"
    @click="onClick"
  >
    <slot name="icon">
      <icon v-if="icon" class="m-cell__left-icon" :name="icon" />
    </slot>
    <div class="m-cell__title" v-if="title || $slots.title">
      <slot name="title">
        <span v-text="title" />
        <div class="m-cell__label" v-if="label" v-text="label" />
      </slot>
    </div>
    <div
      class="m-cell__value"
      v-if="value || $slots.default"
      :class="{
        'm-cell__value--link': isLink,
        'm-cell__value--alone': !$slots.title && !title && !label
      }"
    >
      <slot>
        <span v-text="value" />
      </slot>
    </div>
    <slot name="right-icon">
      <icon name="arrow" class="m-cell__right-icon" v-if="isLink" />
    </slot>
    <slot name="extra" />
  </div>
</template>

<script>
import Icon from '../icon';
import RouterLink from '../mixins/router-link';
import create from '../utils/create-basic';

export default create({
  name: 'cell',

  components: {
    Icon
  },

  mixins: [RouterLink],

  props: {
    icon: String,
    title: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    value: [String, Number],
    border: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onClick() {
      this.$emit('click');
      this.routerLink();
    }
  }
});
</script>

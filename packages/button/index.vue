<template>
  <component
    :is="tag"
    :type="nativeType"
    :disabled="disabled"
    class="m-button"
    :class="[
      'm-button--' + type,
      'm-button--' + size,
      {
        'm-button--disabled': disabled,
        'm-button--loading': loading,
        'm-button--block': block,
        'm-button--bottom-action': bottomAction,
        'm-button--unclickable': disabled || loading
      }
    ]"
    @click="onClick"
  >
    <loading v-if="loading" size="20px" :color="type === 'default' ? 'black' : 'white'" />
    <span class="m-button__text">
      <slot>{{ text }}</slot>
    </span>
  </component>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'button',

  props: {
    text: String,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  methods: {
    onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  }
});
</script>

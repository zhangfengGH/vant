<template>
  <transition name="m-dialog-bounce">
    <div class="m-dialog" v-show="value">
      <div class="m-dialog__header" v-if="title" v-text="title" />
      <div class="m-dialog__content m-hairline">
        <slot>
          <div class="m-dialog__message" v-if="message" :class="{ 'm-dialog__message--withtitle': title }" v-html="message" />
        </slot>
      </div>
      <div class="m-dialog__footer" :class="{ 'is-twobtn': showCancelButton && showConfirmButton }">
        <m-button
          v-show="showCancelButton"
          :loading="loading.cancel"
          size="large"
          class="m-dialog__cancel"
          @click="handleAction('cancel')"
        >
          {{ cancelButtonText || $t('cancel') }}
        </m-button>
        <m-button
          v-show="showConfirmButton"
          size="large"
          :loading="loading.confirm"
          class="m-dialog__confirm"
          :class="{ 'm-hairline--left': showCancelButton && showConfirmButton }"
          @click="handleAction('confirm')"
        >
          {{ confirmButtonText || $t('confirm') }}
        </m-button>
      </div>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import VanButton from '../button';
import Popup from '../mixins/popup';

export default create({
  name: 'dialog',

  components: {
    VanButton
  },

  mixins: [Popup],

  props: {
    title: String,
    message: String,
    callback: Function,
    beforeClose: Function,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },

  methods: {
    handleAction(action) {
      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, () => {
          this.onClose(action);
          this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },

    onClose(action) {
      this.$emit('input', false);
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
});
</script>

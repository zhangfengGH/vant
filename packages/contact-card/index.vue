<template>
  <div class="m-contact-card" :class="[`m-contact-card--${type}`, { 'm-contact-card--uneditable': !editable }]" @click="onClick">
    <div class="m-contact-card__content">
      <template v-if="type === 'add'">
        <icon class="m-contact-card__icon" name="add2" />
        <div class="m-contact-card__text">{{ addText || $t('addText') }}</div>
      </template>
      <template v-else-if="type === 'edit'">
        <icon class="m-contact-card__icon" name="contact" />
        <div class="m-contact-card__text">
          <div>{{ $t('contact') }}：{{ name }}</div>
          <div>{{ $t('tel') }}：{{ tel }}</div>
        </div>
      </template>
    </div>
    <icon v-if="editable" class="m-contact-card__arrow" name="arrow" />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'contact-card',

  props: {
    tel: String,
    name: String,
    addText: String,
    editable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'add'
    }
  },

  methods: {
    onClick(event) {
      if (this.editable) {
        this.$emit('click', event);
      }
    }
  }
});
</script>

<template>
  <i class="m-icon" :class="`m-icon-${name}`" v-on="$listeners">
    <slot />
    <div v-if="isDef(info)" class="m-icon__info">{{ info }}</div>
  </i>
</template>

<script>
import { isDef } from '../utils';
import create from '../utils/create-basic';

export default create({
  name: 'icon',

  props: {
    name: String,
    info: [String, Number]
  },

  methods: {
    isDef
  }
});
</script>

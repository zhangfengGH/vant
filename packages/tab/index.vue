<template>
  <div class="m-tab__pane" :class="{ 'm-tab__pane--select': index === parent.curActive }">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';
import findParent from '../mixins/find-parent';

export default create({
  name: 'tab',

  mixins: [findParent],

  props: {
    title: String,
    disabled: Boolean
  },

  computed: {
    index() {
      return this.parent.tabs.indexOf(this);
    }
  },

  created() {
    this.findParent('m-tabs');
    this.parent.tabs.push(this);
  },

  destroyed() {
    this.parent.tabs.splice(this.index, 1);
  }
});
</script>

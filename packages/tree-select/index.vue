<template>
  <div class="m-tree-select" :style="{ height: mainHeight + 'px' }">
    <div class="m-tree-select__nav">
      <div
        v-for="(item, index) in items"
        class="m-tree-select__nitem m-ellipsis"
        :class="{ 'm-tree-select__nitem--active': mainActiveIndex === index }"
        @click="$emit('navclick', index)">
        {{ item.text }}
      </div>
    </div>
    <div class="m-tree-select__content" :style="{ height: itemHeight + 'px' }">
      <div
        v-for="item in subItems"
        :key="item.id"
        class="m-tree-select__item m-ellipsis"
        :class="{ 'm-tree-select__item--active': activeId === item.id }"
        @click="onItemSelect(item)">
        {{ item.text }}
        <icon
          v-if="activeId === item.id"
          name="success"
          class="m-tree-select__selected"
        />
      </div>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'tree-select',

  props: {
    items: {
      type: Array,
      default: () => []
    },
    mainActiveIndex: {
      type: Number,
      default: 0
    },
    activeId: {
      type: Number,
      default: 0
    },
    maxHeight: {
      type: Number,
      default: 300
    }
  },

  computed: {
    subItems() {
      const selectedItem = this.items[this.mainActiveIndex] || {};
      return selectedItem.children || [];
    },
    mainHeight() {
      const maxHeight = Math.max(this.items.length * 44, this.subItems.length * 44);
      return Math.min(maxHeight, this.maxHeight);
    },
    itemHeight() {
      return Math.min(this.subItems.length * 44, this.maxHeight);
    }
  },

  methods: {
    onItemSelect(data) {
      this.$emit('itemclick', { ...data });
    }
  }
});
</script>

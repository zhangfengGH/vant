<template>
  <m-tabbar v-model="active" @change="onChange">
    <m-tabbar-item icon="shop">
      <span>自定义</span>
      <img slot="icon" :src="active === 0 ? icon.active : icon.normal" >
    </m-tabbar-item>
    <m-tabbar-item icon="chat">标签</m-tabbar-item>
    <m-tabbar-item icon="chat">标签</m-tabbar-item>
    <m-tabbar-item icon="records">标签</m-tabbar-item>
  </m-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      changeRecord: 0,
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    };
  },

  methods: {
    onChange(val) {
      this.changeRecord = val;
    }
  }
};
</script>

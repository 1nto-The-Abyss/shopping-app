<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive" >
      <slot name="item-icon"/>
    </div>
    <div v-else style="color:#ff0000">
      <slot name="item-icon-active"/>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  components: {},
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
    };
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    } 
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive? { color:this.activeColor } : {}
    }
  },
}
</script>
<style lang="less" scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
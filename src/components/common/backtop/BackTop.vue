<template>
  <div class="rocket" v-show="showIcon" @click="backTop">
    <svg class="iconfont" aria-hidden="true">
      <use xlink:href="#icon-rocket"></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: "BackTop",
  components: {},
  props: {},
  data () {
    return {
      showIcon: false
    };
  },
  methods: {
    // 滚动条到1400时显示图标
    scroll(e) {
      const scrollTop = e.target.scrollingElement.scrollTop
      if(scrollTop > 1400) {
        this.showIcon = true
      } else {
        this.showIcon = false
      }
    },
    backTop() {
      // window.scrollTo()方法的时候安卓或者ios会存在兼容性问题
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  },
  watch: {},
  computed: {},
  mounted() {
    window.addEventListener('scroll',this.scroll)
  }
}
</script>
<style lang="less" scoped>
.rocket {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: @pink;
  z-index: 99;
  position: fixed;
  right: 5px;
  bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .iconfont {
    color: #fff;
    font-size: 40px;

  }
}
</style>
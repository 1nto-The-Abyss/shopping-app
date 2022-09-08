<template>
  <div class="rocket">
    <svg class="iconfont" aria-hidden="true">
      <use xlink:href="#icon-rocket"></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: "ToTop",
  components: {},
  props: {},
  data () {
    return {
      show: false
    };
  },
  methods: {
    scroll(e) {
      const scrollTop = e.target.scrollingElement.scrollTop
      console.log(scrollTop);
      if(scrollTop > 1400) {
        this.show = true
      }
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
  position: sticky;
  right: 0;
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
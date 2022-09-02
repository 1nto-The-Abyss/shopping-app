<template>
  <div id="home">
    <nav-bar>
      <div slot="center">
        蘑菇街
      </div>
    </nav-bar>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banner" :key="index">
        <img v-lazy="item.image">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar"
import {  _getHomeMultidata } from "@/network/home";
export default {
  components: {
    NavBar
  },
  props: {},
  data () {
    return {
      banner: [], // 轮播图数据
      recommends: [], // 分类数据
      multidata: "",
    };
  },
  methods: {},
  watch: {},
  computed: {},
  created() {
    _getHomeMultidata().then(res => {
      this.banner = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>
<style lang="less" scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: @pink;
  color: #fff;
}
.van-swipe {
  img{
    width: 100%;
  }
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
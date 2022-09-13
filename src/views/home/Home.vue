<template>
  <div id="home">
    <nav-bar>
      <div slot="center">
        蘑菇街
      </div>
    </nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 首页轮播图 -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banner" :key="index">
          <img v-lazy="item.image">
        </van-swipe-item>
      </van-swipe>
      <!-- 首页推荐模块 -->
      <home-recommend :recommends="recommends"></home-recommend>
      <!-- 本周流行 -->
      <home-feature></home-feature>
      <!-- 分类 -->
      <home-tab></home-tab>
      <back-top></back-top>
    </van-pull-refresh>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar"
import BackTop from "@/components/common/backtop/BackTop"
import HomeRecommend from "./components/HomeRecommend"
import HomeFeature from "./components/HomeFeature"
import HomeTab from "./components/HomeTab"
import {  _getHomeMultidata, _getHomeGoods } from "@/network/home";
export default {
  components: {
    NavBar,
    BackTop,
    HomeRecommend,
    HomeFeature,
    HomeTab
  },
  props: {},
  data () {
    return {
      banner: [], // 轮播图数据
      recommends: [], // 推荐数据
      multidata: "",
      isLoading: false
    };
  },
  methods: {
    async onRefresh() {
      await this.getHomeDate()
      setTimeout(() => {       
        this.isLoading = false
      },500)
    },
    getHomeDate() {
      const res = _getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
        this.recommends = res.data.recommend.list
      });
      return res
    }
  },
  watch: {},
  computed: {},
  created() {
    this.getHomeDate()
  }
}
</script>
<style lang="less" scoped>
#home {
  position: relative;
  margin-bottom: 49px;
}
.nav-bar {
  background-color: @pink;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
}
:deep .van-swipe {
  .van-swipe__track {
    height: 200px;
  }
  img{
    width: 100%;
  }
}
</style>
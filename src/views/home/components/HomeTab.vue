<template>
  <div>
    <van-tabs v-model="activeName" @click="tabClick"  >
      <van-tab 
        v-for="(item,index) in hometabs" 
        :key="index" 
        :title="item.title"
        :name="item.type"
      >
      <div 
        v-for="(item1,index1) in item.list" 
        :key="index1"
        class="tab-item"
        ref="goodsList"
      >
        <img :src="item1.show.img" alt="">
        <p class="title">{{item1.title}}</p>
      </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {  _getHomeGoods } from "@/network/home";
export default {
  name: "HomeTab",
  components: {},
  props: {
  },
  data () {
    return {
      hometabs:[
        {
          type: "pop",
          title: "流行",
          page: 1,
          list:[]
        },
        {
          type: "new",
          title: "新款",
          page: 1,
          list: []
        },
        {
          type: "sell",
          title: "精选",
          page: 1,
          list: []
        }
      ], // 分类数据
      activeName: "pop",
    };
  },
  methods: {
    tabClick(name) {

    },
    async getTabList(item) {
      const params = {
        type: item.type,
        page: item.page
      };
      await _getHomeGoods(params).then(res => {
        item.list = res.data.list
      });
    },
    lazyLoading(e) {
      // const scrollTop = e.taregt.scrollTop
      // const  
    }
  },
  watch: {},
  computed: {
  },
   created() {
    for(let item of this.hometabs) {
      this.getTabList(item)
    }
  },
  mounted() {
    window.addEventListener('scroll',this.lazyLoading)
  }
}
</script>
<style lang="less" scoped>
.van-tab__pane {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 10px;
}
.tab-item {
  margin-bottom: 20px;
  img {
    width: 160px;
    height: 208px;
    border-radius: 10px;
  }
  .title {
    width: 160px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
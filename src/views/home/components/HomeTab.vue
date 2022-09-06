<template>
  <div>
    <van-tabs v-model="active">
      <van-tab 
        v-for="(item,index) in hometabs" 
        :key="index" 
        :title="item.title"
        @click="tabClick(index)"  
      >
      <div 
        v-for="(item1,index1) in item.list" 
        :key="index1"
        class="tab-item"
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
      hometabs:{
        "pop":{
          title: "流行",
          page: 1,
          list:[]
        },
        "new":{
          title: "新款",
          page: 1,
          list: []
        },
        "sell":{
          title: "精选",
          page: 1,
          list: []
        }
      }, // 分类数据
      active: 0,
      currentType: "pop"
    };
  },
  methods: {
    getTabList(type) {
      const params = {
        type: type,
        page: this.hometabs[type].page
      };
      _getHomeGoods(params).then(res => {
        this.hometabs[type].list = res.data.list
      })
    }
  },
  watch: {},
  computed: {
  },
  created() {
    for(let item in this.hometabs) {
      this.getTabList(item)
    }
  }
}
</script>
<style lang="less" scoped>
.van-tab__pane {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 0px;
}
.tab-item {
  width: 45%;
  height: auto;
  margin-bottom: 20px;
  img {
    width: 100%;
    border-radius: 10px;
  }
  .title {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
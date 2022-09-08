<template>
  <div>
    <van-tabs v-model="activeName">
      <van-tab 
        v-for="(item,index) in hometabs" 
        :key="index" 
        :title="item.title"
        :name="item.type"
      >
      <van-list 
        v-model="loading" 
        :finished="finished" 
        finished-text="没有更多了"
        @load="onLoad(item)"
        :immediate-check = "false"
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
      </van-list>
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
      loading: false,
      finished: false
    };
  },
  methods: {
    getTabList(item) {
      const params = {
        type: item.type,
        page: item.page
      };
      _getHomeGoods(params).then(res => {
        if(res.success) {
          item.list.push(...res.data.list) 
        } else {
          this.finished = true
        }
          this.loading = false
      });
    },
    onLoad(item) {
      item.page++
      this.getTabList(item)
    },
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
  }
}
</script>
<style lang="less" scoped>
.van-list {
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
:deep .van-tabs__wrap {
  position: sticky;
  top: 44px;
}
</style>
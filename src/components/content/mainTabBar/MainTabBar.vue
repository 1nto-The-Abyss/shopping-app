<template>
  <div>
    <tab-bar>
      <template #default>
        <!-- 首页 -->
        <tab-bar-item path="/home">
          <template #item-icon>
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-shouye"></use>
            </svg>
          </template>
          <template #item-icon-active>
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-shouye-1"></use>
            </svg>
          </template>
          <template #item-text>
            <div>首页</div>
          </template>
        </tab-bar-item>
        <!-- 分类 -->
        <tab-bar-item path="/category">
          <template #item-icon>
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-fenlei"></use>
            </svg>
          </template>
          <template #item-icon-active>
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-fenlei-1"></use>
            </svg>
          </template>
          <template #item-text>
            <div>分类</div>
          </template>
        </tab-bar-item>
        <!-- 购物车 -->
        <tab-bar-item path="/shopcart">
          <template #item-icon>
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-gouwuche"></use>
            </svg>
          </template>
          <template #item-icon-active>
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-gouwuche-1"></use>
            </svg>
          </template>
          <template #item-text>
            <div>购物车</div>
          </template>
        </tab-bar-item>
        <!-- 我的 -->
        <tab-bar-item path="/profile">
          <template #item-icon>
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-wode"></use>
            </svg>
          </template>
          <template #item-icon-active>
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-wode-1"></use>
            </svg>
          </template>
          <template #item-text>
            <div>我的</div>
          </template>
        </tab-bar-item>
      </template>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
  props: {},
  data () {
    return {
    };
  },
  methods: {},
  watch: {},
  computed: {},
}
</script>
<style lang="less" scoped>
</style>
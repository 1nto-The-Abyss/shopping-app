<template>
  <div class="recommends">
    <div v-for="(item,index) in recommends" :key="index" class="recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Homerecommend",
  components: {},
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
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
.recommends {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 8px solid #eee;
  .recommend {
    text-align: center;
  }
  img {
    width: 80px;
    margin-bottom: 5px;
  }
}
</style>
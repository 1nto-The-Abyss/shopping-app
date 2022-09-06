<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="@/assets/img/home/HomeFeature.jpg" alt="">
    </a>
  </div>
</template>
<script>
export default {
  name: "HomeFeature",
  components: {},
  props: {
    feature: {
      type:String,
      default() {
        return ""
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
.feature  img {
  width: 100%;
}
</style>
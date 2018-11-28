<template>
 <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
  <el-menu-item index="2">菜单栏二</el-menu-item>
  <el-menu-item index="3">菜单栏三</el-menu-item>
  <el-menu-item index="4"><a href="https://google.com" target="_blank">帮助</a></el-menu-item>
</el-menu>

</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

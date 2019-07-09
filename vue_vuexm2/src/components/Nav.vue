<template>
<div class="aaa">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
  <el-menu-item index="/">处理中心</el-menu-item>
  <el-menu-item index="/list">
    我的工作台
    <!-- <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu> -->
  </el-menu-item>
  <el-menu-item index="/gdl">消息中心</el-menu-item>
  <el-menu-item index="4">订单管理</el-menu-item>
</el-menu>
</div>
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

<style>
/* .aaa{
 width:100%;
 height:80px;
 border:1px solid #fff;
 position:fixed;
 bottom:0px;
} */

</style>

  <!--<van-tabbar v-model="active">
    <van-tabbar-item icon="fire"
                     to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="bars"
                     to="/list">列表</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="chat-o" to="/gdl">详情页</van-tabbar-item>
  </van-tabbar> -->

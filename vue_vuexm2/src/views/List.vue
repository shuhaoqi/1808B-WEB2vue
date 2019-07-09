<template>
  <div>
    </div>
</template>
<script>
import { getPage } from '../api'
export default {
  data () {
    return {
      list: [],
      page: 1, // 默认拿第一页的数据
      hasMore: true // 默认有下一页数据
    }
  },
  created () {
    this.getpagelist()
  },
  methods: {
    async getpagelist () {
      let { list, hasMore } = await getPage(this.page)
      // 把新请回来的数据和原来的this.list的数据合并就可以保留所有的数据
      // this.list = this.list =.concat()
      // es6
      this.hasMore = hasMore
      this.list = [...this.list, ...list]
    },
    // 点击加载下一页
    loadmore () {
      // 如果没有更多数据了，就不在发送请求了
      if (this.hasMore === false) return
      // 页数加1
      this.page = this.page + 1
      // 方式请求拿到下一页数据
      this.getpagelist()
    }
  }
}
</script>
<style>
.bto-box {
  text-align: center;
}
</style>

<!-- <div class="container">
    <div v-for="item in list"
         :key="item.id">
      <!- 列表 ->
      <van-card :price="item.price"
                :desc="item.info"
                :title="item.name"
                :thumb="item.img" />
    </div>
    <div class="bto-box">
      <van-button type="primary"
                  @click="loadmore">{{hasMore?"点击加载更多":"没有数据了"}}</van-button>

    </div>
  </div> -->

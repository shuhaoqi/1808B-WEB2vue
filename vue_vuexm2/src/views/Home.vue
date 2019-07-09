<template>
  <div class="home">
    <Banner :sliders="sliders"></Banner>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import { getBanner } from '../api/index.js'
export default {
  name: 'home',
  data () {
    return {
      sliders: []
    }
  },
  created () {
    this.getSlider()
  },
  components: {
    Banner
  },
  methods: {
    async getSlider () {
      let { banner } = await getBanner()
      this.sliders = banner
    }
  }
}
</script>

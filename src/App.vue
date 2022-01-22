<template>
  <section class="banner" role="banner">
    <Header/>
    <Banner/>
  </section>

  <router-view/>

  <Footer/>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Banner from '@/components/common/Banner.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  components:{
    Header,
    Banner,
    Footer
  },

}
</script>
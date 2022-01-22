<template>
  <div class="home">
    <Features/>
    <Works/>
    <Teams/>
    <Testimonials/>
    <Download/>
  </div>
</template>

<script>
import Download from '@/components/parts/Download.vue'
import Features from '@/components/parts/Features.vue'
import Teams from '@/components/parts/Teams.vue'
import Testimonials from '@/components/parts/Testimonials.vue'
import Works from '@/components/parts/Works.vue'


export default {
  name: 'Home',
  components: {
    Features,
    Testimonials,
    Teams,
    Works,
    Download
  },
    
}
</script>

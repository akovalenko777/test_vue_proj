<template>
    <section id="works" class="works section no-padding">
        <div class="container-fluid">
            <div class="row no-gutter">
                <lightgallery
                    :settings="{ speed: 500, plugins: plugins }"
                    :onInit="onInit"
                    :onBeforeSlide="onBeforeSlide"
                >
                    <a v-for="n in 8" :key="n" :href="`assets/images/work-${n}.jpg`" class="work-box col-lg-3 col-md-6 col-sm-6 work animated fadeIn">
                        <img :src="`assets/images/work-${n}.jpg`" alt="">
                        <div class="overlay">
                            <div class="overlay-caption">
                                <h5>Project Name</h5>
                                <p>Website Design</p>
                            </div>
                        </div><!-- overlay -->
                    </a>
                </lightgallery>
            </div>
        </div>
    </section><!-- works -->
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-thumbnail.scss';
import 'lightgallery/scss/lg-zoom.scss';

export default {
    name:"Works",
    components:{
        Lightgallery
    },
    data: () => ({
        plugins: [lgThumbnail, lgZoom],
    }),
    methods: {
        onInit: () => {
            console.log('lightGallery has been initialized');
        },
        onBeforeSlide: () => {
            console.log('calling before slide');
        },
    },
}
</script>
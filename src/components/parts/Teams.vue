<template>
    <section id="teams" class="section teams">
        <div class="container">
            <div class="row">
                <carousel :settings="sliderSettings" :breakpoints="breakpoints">
                    <slide v-for="p in teamsList" :key="p.name" class="col-md-3 col-sm-6">
                        <OnePerson :person="p" />
                    </slide>

                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel>
                
            </div>
        </div>
    </section><!-- teams -->
</template>

<script>
import axios from 'axios'
import OnePerson from './OnePerson.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    name:"Teams",
    components:{
        OnePerson,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data(){
        return {
            teamsList:[],
            sliderSettings:{
                itemsToShow:4,
                itemsToScroll:1,
                wrapAround:true,
                snapAlign:'start'
            },
            breakpoints: {
                300: {
                    itemsToShow: 1,
                },
                560: {
                    itemsToShow: 2,
                },
                780: {
                    itemsToShow: 3,
                },
                1024: {
                    itemsToShow: 4,
                },
            },
        }
    },
    created(){
        axios.get('data/teams.json')
            .then((resp)=>{
                this.teamsList = resp.data;
            })
    }
}
</script>

<style>
.carousel__prev, .carousel__next {
    background-color: #292c47;
}
.carousel__pagination {
    margin-top: 30px;
}
</style>
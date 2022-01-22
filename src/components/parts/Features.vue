<template>
    <section id="features" class="features section">
        <div class="container">
            <div class="row">
                <div v-for="feature in featureList" :key="feature.title" class="col-md-4 col-sm-6 feature text-center">
                    <span :class="'icon '+feature.icon"></span>
                    <div class="feature-content">
                        <h5>{{feature.title}}</h5>
                        <p>{{feature.text}}</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section><!-- features -->
</template>

<script>
import axios from 'axios'

export default {
    name:"Features",
    data(){
        return {
            featureList:[]
        }
    },
    created(){
        axios.get("data/features.json")
            .then((resp)=>{
                this.featureList = resp.data;
                this.$toast.success("Features loaded")
            })
            .catch((err)=>{
                this.$toast.error(err);
            })
    },
    methods:{
        filterItems(){
            let result = [];
            for(let i=0;i<3;i++){
                result.push(this.featureList[i])
            }
            return result;
        }
    }
}
</script>
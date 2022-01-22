<template>
    <div class="container" id="contacts">
        <h1 class="text-center mb-4">Contact Us</h1>
        <div class="row">
            <div class="col-md-6">
                <Map :center="[46.97199188625468, 31.966389267462734]" :zoom="17"/>
            </div>
            <div class="col-md-6">
                <FeedbackForm/>
            </div>
        </div>
    </div>
</template>

<script>
import Map from '../components/parts/Map.vue'
import FeedbackForm from '../components/parts/FeedbackForm.vue'

export default {
    name:"Contacts",
    components:{
        Map,
        FeedbackForm
    }
}
</script>

<style lang="scss" scoped>
#contacts {
    padding: 60px 0 100px;
    h1 {
        font-size: 32px;
        margin-bottom: 40px;
    }
}
</style>
<template>
    <form>
        <input type="text" placeholder="Enter Name" v-model="name">
        <br>
        <input type="text" placeholder="Enter Phone" v-model="phone">
        <br>
        <button type="submit" class="btn btn-large">Send</button>
    </form>
</template>

<script>
export default {
    name:"CallbackForm",
    data(){
        return {
            name:'',
            phone:''
        }
    }
}
</script>
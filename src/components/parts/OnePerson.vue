<template>
    <div class="person">
        <img :src="`assets/images/${person.photo}`" alt="" class="img-responsive">
        <div class="person-content">
            <h4>{{ person.name }}</h4>
            <h5 class="role">{{ person.position }}</h5>
            <p>{{ person.description }}</p>
        </div>
        <ul class="social-icons clearfix">
            <li v-for="soc in person.soc" :key="soc.icon">
                <a :href="soc.link" target="_blank" rel="nofollow noreferrer"><span :class="`fa ${soc.icon}`"></span></a>
            </li>
        </ul>
    </div><!-- person -->
</template>

<script>
export default {
    name:"OnePerson",
    props:['person']
}
</script>
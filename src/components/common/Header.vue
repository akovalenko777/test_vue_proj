<template>
    <header id="header" :class="isFixed?'fixed':''">
            <div class="header-content clearfix">
                <router-link to="/" class="logo"><img src="assets/images/logo.png" alt=""></router-link>
                <nav class="navigation" role="navigation">
                    <ul class="primary-nav">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/contacts">Contacts</router-link></li>

                        <!-- <li><a href="#features">Features</a></li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#teams">Our Team</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#download">Download</a></li> -->
                    </ul>
                </nav>
                <a href="#" class="nav-toggle">Menu<span></span></a>
            </div><!-- header content -->
        </header><!-- header -->
</template>

<script>
export default {
    name:'Header',
    data(){
        return {
            isFixed:false
        }
    },
    mounted(){
        window.document.onscroll = ()=>{
            this.isFixed = window.scrollY>100?true:false;
        }
    }
}
</script>

<style lang="scss">
#header {
    z-index: 1001;
}
</style>
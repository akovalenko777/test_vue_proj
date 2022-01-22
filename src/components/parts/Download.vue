<template>
    <section id="download" class="section download">
        <div class="container">
            <div class="col-md-8 col-md-offset-2 text-center">
                <h3>Are You Ready to Start? Download Now For Free!</h3>
                <p>Fusce dapibus, tellus ac cursus commodo</p>
                <a href="#" @click.prevent="openAlert" class="btn btn-large">Download for Free</a>
                <br>
                <a href="#" @click.prevent="showModal=true" class="btn btn-large">Open Modal</a>
            </div>
        </div>

        <transition name="modal">
            <modal v-if="showModal" @close="showModal = false">
            <!--
                you can use custom content here to overwrite
                default content
            -->
                <template v-slot:header>
                    <h3>Order callback</h3>
                    <button @click="showModal = false">&times;</button>
                </template>
                <template #body>
                    <Callback/>
                </template>
                <template #footer>&nbsp;</template>
            </modal>
        </transition>

    </section><!-- download -->
</template>

<script>
import Modal from '../common/Modal.vue'
import Callback from '../common/CallbackForm.vue'

export default {
    name:"Download",
    components:{
        Modal,
        Callback
    },
    data(){
        return {
            showModal:false
        }
    },
    methods:{
        openAlert(){
            this.$swal({
  title: '<strong>HTML <u>example</u></strong>',
  icon: 'info',
  html:
    'You can use <b>bold text</b>, ' +
    '<a href="//sweetalert2.github.io">links</a> ' +
    'and other HTML tags',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
});
        }
    }
}
</script>
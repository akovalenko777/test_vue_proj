<template>
    <div id="feedback">
        <h3 class="text-center">Send feedback to Us</h3>
        <form @submit.prevent="validateAndSend">
            <input type="text" class="form-control" placeholder="Enter your name" v-model.trim="name">
            <br>
            <input type="text" class="form-control" placeholder="Enter your email" v-model.trim="email">
            <br>
            <input v-maska="'+38 (0##) ###-##-##'" type="text" class="form-control" placeholder="Enter your phone number" v-model="phone" @blur="checkPhoneLength">
            <br>
            <input type="text" class="form-control" placeholder="Enter subject" v-model.trim="subject">
            <br>
            <textarea class="form-control" placeholder="Enter message" v-model.trim="message"></textarea>
            <br>
            <button type="submit" class="btn btn-large">Send</button>
        </form>
    </div>
</template>

<script>
import { maska } from 'maska'
import axios from 'axios'

export default {
    name:"FeedbackForm",
    directives: { maska },
    data(){
        return {
            name:'',
            email:'',
            phone:'',
            subject:'',
            message:'',
            BOT_TOKEN:'1853266603:AAERsvTSB-eVFbV3rCWckiVfVv6KEgurYFc',
            CHAT_ID:'-1001498105319'
        }
    },
    methods:{
        checkPhoneLength(){
            if(this.phone.length!==19){
                this.phone = '';
            }
        },
        validateEmail(email){
            // eslint-disable-next-line
            const regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return email.match(regexp)
        },
        validateForm(){
            let valid = true;
            let err_text = [];
            if(this.name===""){
                valid = false;
                err_text.push("Enter your name.")
            }
            if(this.email===""){
                valid = false;
                err_text.push("Enter your email.")
            }else{
               if(!this.validateEmail(this.email)){
                   valid = false;
                   err_text.push("Enter valid email address.");
               }
            }
            if(this.phone===""){
                valid = false;
                err_text.push("Enter your phone number.")
            }
            if(this.subject===""){
                valid = false;
                err_text.push("Enter subject.")
            }
            if(!valid){
                this.$toast.error(err_text.join(' '))
            }
            return valid;
        },
        validateAndSend(){
            if(this.validateForm()){
                let text = encodeURI(`Name: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}\nSubject: ${this.subject}\rMessage: ${this.message}`);
                axios.get(`https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage?chat_id=${this.CHAT_ID}&text=${text}&parse_mode=html`)
                    .then((resp)=>{
                        if(resp.data.ok){
                            this.$toast.success("Message successfully sent")
                            this.name = '';
                            this.email = '';
                            this.phone = '';
                            this.subject = '';
                            this.message = '';
                        }else{
                            this.$toast.error(resp.data.description)
                        }
                    })
                    .catch((err)=>{
                        this.$toast.error(err)
                    })
            }
        }
    }
}
</script>
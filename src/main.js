import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from '@meforma/vue-toaster'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import VueLazyLoad from 'vue3-lazyload'

createApp(App)
    .use(router)
    .use(Toaster, {position:'top'})
    .use(VueSweetalert2)
    .use(VueLazyLoad)
    .mount('#app')


// const app = createApp(App);
// app.use(router);
// app.use(Toaster);
// app.mount('#app');

// app.$toast.show(`Hey! I'm here`);


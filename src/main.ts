import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './Routing'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret,faUsers} from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle,faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import { faInstagram,faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
library.add(faUserSecret,faUsers,faTimesCircle,faCheckCircle,faUserSecret,faInstagram,faTelegramPlane);

createApp(App)
.component('fa',FontAwesomeIcon)
.use(router)
.use(createPinia())
.mount('#app')

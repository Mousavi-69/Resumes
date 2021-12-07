import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.scss'
import router from './Routing'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret,faUsers,faBars,faPhone,faMapMarkerAlt,faInfo} from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle,faCheckCircle,faCalendarAlt,faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faInstagram,faTelegramPlane,faGithub} from '@fortawesome/free-brands-svg-icons';
library.add(faUserSecret,faUsers,faBars,faPhone,faMapMarkerAlt,faInfo,faTimesCircle,faCheckCircle,faCalendarAlt,faEnvelope,faUserSecret,faInstagram,faTelegramPlane,faGithub);

createApp(App)
.component('fa',FontAwesomeIcon)
.use(router)
.use(createPinia())
.mount('#app')

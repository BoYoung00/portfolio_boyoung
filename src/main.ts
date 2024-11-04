import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './registerServiceWorker'

library.add(fas, fab);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .mount('#app');

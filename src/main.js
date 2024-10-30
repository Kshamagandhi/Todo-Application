import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { router } from './router';

// setup fake backend
import { fakeBackend } from './helpers';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
//Vue.config.productionTip = false
fakeBackend();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

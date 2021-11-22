import { createApp } from 'vue'
import App from './App.vue'
import { createClient } from 'pexels';

const client = createClient('563492ad6f9170000100000101ce71bbc39b4a5ab970ff7eb4ded018');


createApp(App).mount('#app')

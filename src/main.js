import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // prime libray for flex

const app = createApp(App);

app.use(PrimeVue, store);

app.mount("#app");

// createApp(App).use(store).mount("#app");

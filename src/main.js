import { createApp } from "vue";
import App from "./App.vue";
import components from "./conponents/UI/index";
import router from "./router/router";
import VIntersection from "./dirictivs/VIntersection";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});
app.directive("intersection", VIntersection);
app.use(router).mount("#app");

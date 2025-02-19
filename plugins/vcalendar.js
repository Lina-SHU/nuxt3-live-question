import { setupCalendar, DatePicker, Calendar } from "v-calendar";
import "v-calendar/style.css";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(setupCalendar, {});
    nuxtApp.vueApp.component('VDatePicker', DatePicker);
    nuxtApp.vueApp.component('VCalendar', Calendar);
});
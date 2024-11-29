export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('timeformat', {
        mounted(el, binding) {
            const timeformat = new Date(binding.value).toLocaleString("zh-Hant", { hour12: false }).replaceAll('/', '-');
            // yyyy-mm-dd hh:mm:ss
            el.innerText = timeformat;
        }
    })
})

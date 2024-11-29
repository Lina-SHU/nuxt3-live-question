export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('textcase', {
        mounted( el, binding) {
            const modifierCase = {
                uppercase: binding.value.toUpperCase(),
                lowercase: binding.value.toLowerCase()
            };
            el.innerText = modifierCase[binding.arg];
        }
    })
})

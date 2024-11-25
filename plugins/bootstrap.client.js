import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

const { Modal, Offcanvas } = bootstrap;

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      showModal: (element, options) => new Modal(element, options),
      showOffcanvas: (element, options) => new Offcanvas(element, options)
    }
  }
});
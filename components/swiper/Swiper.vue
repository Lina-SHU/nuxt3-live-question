<script setup>
//  Swiper JS 核心功能
import Swiper from "swiper";

// Swiper 核心與模組的樣式
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = defineProps({
  autoplay: {
    type: Object,
    default: 3000
  },
  pagination: {
    type: Object,
    default: { el: '.swiper-pagination', type: 'bullets' }
  },
  navigation: { 
    type: Object, 
    default: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }},
  slidesPerView: {
    type: Number,
    default: 1
  },
  modules: { type: Array, required: true}
});

const swiperRef = ref(null);
onMounted(() => {
  new Swiper(swiperRef.value, props);
});
</script>

<template>
    <div class="swiper" ref="swiperRef">
        <div class="swiper-wrapper">
            <slot />
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>
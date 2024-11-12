<script setup>
const route = useRoute();
const router = useRouter();

const goToPrevPage = () => {
    router.go(-1);
}
</script>

<template>
  <div>
    <h2>房型詳細頁面：{{ route.fullPath }}</h2>
    <button type="button" class="btn btn-outline-primary" @click="goToPrevPage">回上一頁</button>
  </div>
</template>

<style scoped></style>

<script setup>
const router = useRouter();
const roomsList = ref([]);
// 使用 fetch 或 axios 串接 前台房型 API ( GET )
// apiUrl : https://nuxr3.zeabur.app/api/v1/rooms
// response 回傳後，將資料寫入 roomsList 變數
// 使用 roomsList 變數在下方 template 渲染列表
const getRoomList = async () => {
  try {
      const apiUrl = 'https://nuxr3.zeabur.app/api/v1/rooms';
      const res = await fetch(apiUrl);

      if (!res.ok) {
        alert(res.status);
        return
      }

      const { result } = await res.json();
      roomsList.value = result;
      
  } catch (error) {
      alert(error.message);
  }
};

onMounted(() => {
  getRoomList();
});

const goToDetail = () => {
    router.push('/room/_id');
}
</script>

<template>
  <h1>房型頁面</h1>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-8 col-md-6 col-lg-3" v-for="room in roomsList" :key="room._id">
        <div class="card h-100 shadow-sm" @click="goToDetail">
          <img :src="room.imageUrl" class="card-img-top" alt="Room Image" />
          <div class="card-body d-flex flex-column">
            <h3 class="card-title">{{ room.name }}</h3>
            <p class="card-text flex-grow-1">{{ room.description }}</p>
            <ul class="list-unstyled">
              <li><strong>面積:</strong> {{ room.areaInfo }}</li>
              <li><strong>床型:</strong> {{ room.bedInfo }}</li>
              <li><strong>最大容納人數:</strong> {{ room.maxPeople }}</li>
              <li><strong>價格:</strong> {{ room.price }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
  max-width: 100%;
}
</style>
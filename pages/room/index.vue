<script setup>
const route = useRoute();
const router = useRouter();

useHead({
  title: 'Freyja | 房型列表',
  meta: [
    { name: 'description', content: '探索 Freyja 頂級房型，從景觀尊榮家庭房到尊爵雙人房，享受絕美市景與舒適空間。立即預訂，享受獨特的住宿體驗！' },
    { property: 'og:title', content: 'Freyja | 高雄最頂級的旅館' },
    { property: 'og:description', content: '探索 Freyja 的高雄頂級房型，從景觀尊榮家庭房到尊爵雙人房，享受絕美市景與舒適空間。立即預訂，享受獨特的住宿體驗！' },
    { property: 'og:image', content: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png' },
    { property: 'og:url', content: 'https://freyja.travel.com.tw/room' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Freyja | 高雄最頂級的旅館' },
    { name: 'twitter:description', content: '探索 Freyja 的高雄頂級房型，從景觀尊榮家庭房到尊爵雙人房，享受絕美市景與舒適空間。立即預訂，享受獨特的住宿體驗！' },
    { name: 'twitter:image', content: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png' }
  ]
});

// 使用 fetch 或 axios 串接 前台房型 API ( GET )
// apiUrl : https://nuxr3.zeabur.app/api/v1/rooms
// response 回傳後，將資料寫入 roomsList 變數
// 使用 roomsList 變數在下方 template 渲染列表
// const getRoomList = async () => {
//   try {
//       const apiUrl = 'https://nuxr3.zeabur.app/api/v1/rooms';
//       const res = await fetch(apiUrl);

//       if (!res.ok) {
//         alert(res.status);
//         return
//       }

//       const { result } = await res.json();
//       roomsList.value = result;
      
//   } catch (error) {
//       alert(error.message);
//   }
// };
// onMounted(() => {
//     getRoomList();
// });
// 改成 useFetch
const apiUrl = 'https://nuxr3.zeabur.app/api/v1/rooms';
const { data: roomsList } = await useFetch('/rooms', {
  baseURL: 'https://nuxr3.zeabur.app/api/v1',
  transform: (response) => {
    const { result } = response;
    return result;
  },
  onResponseError({ response }) {
    const { message } = response._data;
    console.error("Error:", message);
    router.push("/");
  },
});

const goToDetail = (roomId) => {
    router.push(`/room/${roomId}`);
};
</script>

<template>
  <h2>房型 index ：{{ route.fullPath }}</h2>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-8 col-md-6 col-lg-3" v-for="room in roomsList" :key="room._id">
        <div class="card h-100 shadow-sm" @click="goToDetail(room._id)">
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
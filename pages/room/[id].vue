<script setup>
const route = useRoute();
const router = useRouter();

// Day 12 使用 useSeoMeta  將 roomObject 的資訊寫入 SEO Meta
/* 請撰寫 useSeoMeta({ }) 渲染出下方的 HTML 結構，並將 {{ }}  改成使用 roomObject 物件的資料。
<title> Freyja | {{ 房型名稱 }}</title>
<meta name="description" content="{{ 房型描述 }}">
<meta property="og:title" content="Freyja | {{ 房型名稱 }} ">
<meta property="og:description" content="{{ 房型描述 }}">
<meta property="og:image" content="{{房型主圖}}">
<meta property="og:url" content="https://freyja.travel.com.tw/room/{房型 id }">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Freyja | {{ 房型名稱 }}">
<meta name="twitter:description" content="{{ 房型描述 }}">
<meta name="twitter:image" content="{{房型主圖}}">
*/

// 串接 API 取得房型詳細資料
// API path : https://nuxr3.zeabur.app/api/v1/rooms/{id}
// 將資料渲染至下方的 div.room-page 區塊
// const roomInfo = ref({});
// const getRoomInfo = async () => {
//   try {
//       const apiUrl = `https://nuxr3.zeabur.app/api/v1/rooms/${route.params.id}`;
//       const res = await fetch(apiUrl);

//       if (!res.ok) {
//         alert(res.status);
//         return
//       }

//       const { result } = await res.json();
//       roomInfo.value = result;
      
//   } catch (error) {
//       alert(error.message);
//   }
// };

// onMounted(() => {
//     getRoomInfo();
// });

/* 改成 useFetch
const {data: roomInfo, status, error} = await useFetch(`/rooms/${route.params.id}`, {
  baseURL: 'https://nuxr3.zeabur.app/api/v1',
  transform: (response) => {
    const { result } = response;
    return result ;
  }
});*/

/* 
Day 13 請將 useSeoMeta({ }) 改成 Nuxt3 SEO 元件的寫法
重複邏輯的地方可以使用 computed 
useSeoMeta({
  title: roomInfo.value.name,
  titleTemplate: (title) => `Freyja | ${title}`,
  description: () => roomInfo.value.description,
  ogTitle: () => `Freyja | ${roomInfo.value.name}`,
  ogDescription: () => `${roomInfo.value.description}`,
  ogImage: () => `${roomInfo.value.imageUrl}`,
  ogUrl: () => `https://freyja.travel.com.tw/room/${roomInfo._id}`,
  twitterCard: 'summary_large_image',
  twitterTitle: () => `Freyja | ${roomInfo.value.name}`,
  twitterDescription: () => `${roomInfo.value.description}`,
  twitterImage: () => `${roomInfo.value.imageUrl}`
});
*/
const pageTitle = ref('Freyja');
const titleTemplate = computed(() => `${pageTitle.value} | ${bookingInfo.value.name}`);
const socialMediaUrl = computed(() => `https://freyja.travel.com.tw/room/${bookingInfo.value._id}`);

const bookingStore = useBookingStore();
const { bookingInfo } = storeToRefs(bookingStore);
// 將房型資料 data 改成使用 Pinia 管理
const { error } = await useAsyncData(`room-data`, async () => {
  const response = await $fetch(`/rooms/${route.params.id}`, {
    baseURL: "https://nuxr3.zeabur.app/api/v1",
  });
  const { result } = response;
  bookingStore.setBookingInfo(result);

  return response;
});

if (error.value) {
  alert("發生錯誤 ! ");
  router.push("/room");
}
</script>

<template>
  <Head>
    <Title>{{ titleTemplate }}</Title>
    <Meta name="description" :content="bookingInfo.description"></Meta>
    <Meta property="og:title" :content="titleTemplate" ></Meta>
    <Meta property="og:description" :content="bookingInfo.description" ></Meta>
    <Meta property="og:image" :content="bookingInfo.imageUrl" ></Meta>
    <Meta property="og:url" :content="socialMediaUrl"></Meta>
    <Meta property="twitter:card"  content="summary_large_image"></Meta>
    <Meta property="twitter:title" :content="titleTemplate" ></Meta>
    <Meta property="twitter:description" :content="bookingInfo.description" ></Meta>
    <Meta property="twitter:image" :content="bookingInfo.imageUrl" ></Meta>
  </Head>
  <h2>房型詳細頁面</h2>

  <div class="container">
    <button @click="router.go(-1)">回上一頁</button>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="room-page">
          <div class="room-header">
            <h1 class="room-name">{{ bookingInfo.name }}</h1>
            <p class="room-description">
              {{ bookingInfo.description }}
            </p>
          </div>

          <div class="room-gallery">
            <img
              :src="bookingInfo.imageUrl"
              :alt="bookingInfo.name"
              class="room-main-image"
            />
            <ul class="room-image-list">
              <li v-for="(imageUrl, index) in bookingInfo.imageUrlList">
                <img :src="imageUrl" :alt="`${bookingInfo.name}圖片${index + 1}`" />
              </li>
            </ul>
            <NuxtLink class="btn btn-lg btn-warning" to="/booking"
              >立即預約</NuxtLink
            >
          </div>

          <div class="room-info">
            <div class="info-block">
              <h2>房間資訊</h2>
              <p>面積: {{ bookingInfo.areaInfo }}</p>
              <p>床型: {{ bookingInfo.bedInfo }}</p>
              <p>最多容納人數: {{ bookingInfo.maxPeople }}</p>
              <p>價格: NT${{ bookingInfo.price }}</p>
            </div>

            <div class="info-block">
              <h2>房間配置</h2>
              <ul>
                <li v-for="layout in bookingInfo.layoutInfo" :key="layout">
                    {{ layout.title }}: {{ layout.isProvide ? '提供' : '未提供' }}
                </li>
              </ul>
            </div>

            <div class="info-block">
              <h2>房內設施</h2>
              <ul>
                <li v-for="facility in bookingInfo.facilityInfo" :key="facility">
                    {{ facility.title }}: {{ facility.isProvide ? '提供' : '未提供' }}
                </li>
              </ul>
            </div>

            <div class="info-block">
              <h2>客房備品</h2>
              <ul>
                <li v-for="amenity in bookingInfo.amenityInfo" :key="amenity">
                    {{ amenity.title }}: {{ amenity.isProvide ? '提供' : '未提供' }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.room-page {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.room-header {
  text-align: center;
  margin-bottom: 30px;
}

.room-name {
  font-size: 2rem;
  color: #333;
}

.room-description {
  font-size: 1rem;
  color: #666;
}

.room-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.room-main-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.room-image-list {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.room-image-list img {
  width: 100px;
  height: auto;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s;
}

.room-image-list img:hover {
  transform: scale(1.1);
}

.room-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-block {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 10px;
}

.info-block h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #444;
}

.info-block p,
.info-block ul {
  font-size: 1rem;
  color: #555;
}

.info-block ul {
  list-style: none;
  padding-left: 0;
}

.info-block ul li {
  margin-bottom: 5px;
}
</style>
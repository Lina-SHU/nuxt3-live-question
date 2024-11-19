## Day 12 - useSeoMeta 與 useServerSeoMeta
在 /pages/room/[id].vue 房型詳細頁面作答，完成以下條件 :
- 在取得房型詳細資料的 roomObject 物件後，使用 useSeoMeta 將 roomObject 的資訊寫入 SEO Meta 。
- 伺服器端提交給搜尋引擎爬蟲以及客戶端渲染的 SEO Meta 皆使用使用下方結構的標籤。請撰寫 useSeoMeta({ }) 渲染出下方的 HTML 結構，並將 {{ }} 替換成使用 roomObject 物件的資料。

## Day 11 - Global head Settings 與 useHead
- 在 nuxt.config.ts 中定義全域設定，確保以下 head 資訊被應用於所有頁面。
```
<title>Freyja | 高雄頂級旅館 - 提供奢華住宿體驗</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Freyja 旅館">
<meta name="keywords" content="Freyja,Freyja 訂房,高雄旅遊,訂房,住宿,住宿預訂,四人房,雙人房,景觀房">
<meta name="description" content="Freyja 旅館位於高雄，提供頂級的住宿體驗。享受絕美市景與高級設施，讓您的每一刻都充滿奢華與舒適。立即預訂，開啟難忘的住宿之旅！">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index, follow">

<link rel="icon" href="/favicon.ico">
<link rel="canonical" href="https://freyja.travel.com.tw">

<meta property="fb:app_id" content="12345678" /> 
<meta property="og:locale"   content="zh-TW" /> 
<meta property="og:type"   content="website" /> 

<meta property="og:url"    content="https://freyja.travel.com.tw" /> 
<meta property="og:title" content="Freyja | 高雄頂級旅館 - 提供奢華住宿體驗" /> 
<meta property="og:image" content="https://freyja.travel.com.tw/images/og-image.jpg" /> 
<meta property="og:description" content="Freyja 旅館位於高雄，提供頂級的住宿體驗。享受絕美市景與高級設施，讓您的每一刻都充滿奢華與舒適。立即預訂，開啟難忘的住宿之旅！" />
```
- 在 /pages/room/index.vue 頁面中，使用 useHead 渲染以下 head 資訊，確保覆蓋全域設定中的對應屬性。
```
<title>Freyja | 房型列表</title>
<meta name="description" content="探索 Freyja 頂級房型，從景觀尊榮家庭房到尊爵雙人房，享受絕美市景與舒適空間。立即預訂，享受獨特的住宿體驗！">

<meta property="og:title" content="Freyja | 高雄最頂級的旅館">
<meta property="og:description" content="探索 Freyja 的高雄頂級房型，從景觀尊榮家庭房到尊爵雙人房，享受絕美市景與舒適空間。立即預訂，享受獨特的住宿體驗！">
<meta property="og:image" content="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png">
<meta property="og:url" content="https://freyja.travel.com.tw/room">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Freyja | 高雄最頂級的旅館">
<meta name="twitter:description" content="探索 Freyja 的高雄頂級房型，從景觀尊榮家庭房到尊爵雙人房，享受絕美市景與舒適空間。立即預訂，享受獨特的住宿體驗！">
<meta name="twitter:image" content="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png">
```
- 確認 /pages/room/index.vue 頁面的 head 設定成功覆蓋了全域 head 中的相同屬性設定。

## Day 10 - useFetch 與 useAsyncData
- 將 pages/room/index.vue 取得房型列表以及 pages/room/[id].vue 取得取得房型詳細資料功能使用的 ES6 fetch() 修改成使用 Nuxt3 useFetch() 或是 useAsyncData() 在伺服器端取得資料。
- 在 pages/room/index.vue 的房型列表中，點擊房型後能夠進入房型內頁。
- 進入房型內頁後，透過動態路由的網址參數 串接 API 取得房型詳細資料。

## Day 9 - $fetch 與 ofetch
- 在 /pages/register.vue 使用模板提供的操作介面填寫註冊表單。點擊 “註冊” 按鈕後使用 Nuxt3 提供的方法串接旅館的 註冊 API ，將請求送出。
- 需使用 try catch 處理請求成功與失敗的訊息，請求成功與失敗皆使用 sweetAlert2 套件 顯示訊息。sweetAlert2 套件在模板已有安裝與引入，不需再額外設定。
```
$swal.fire({
  position: "center",
  icon: ... ,
  title: ... ,
  showConfirmButton: false,
  timer: 1500,
});
```
- 表單不需處理表單驗證、身分驗證、檢查登入狀態以及存入 cookie。
- 註冊 API 夾帶的請求體（Request Body）格式，需要注意以下地方 :
- 所有欄位都必填。
- 密碼需要至少 8 碼以上，並英數混合。
- 電話格式可以是手機號碼與市內電話。
- birthday 格式可以是 "yyyy-mm-dd”。
- zipcode 需要對照到各縣市各區的郵遞區號，可以參考 郵遞區號速查一覽表。

## Day 8 - 動態路由與 404 錯誤頁面處理
- 將 pages/room/_id.vue 調整成房型內頁的動態路由。
- 在 pages/room/index.vue 的房型列表中，點擊房型後能夠進入房型內頁。進入房型內頁後，透過動態路由的網址參數 串接 /api/v1/rooms/{id} 這支API 來取得房型詳細資料。可以使用 fetch 或 axios 來串接 API。
- 取得房型資料後，將資料內容渲染在畫面上。畫面的 HTML 、CSS 已有在 pages/room/_id.vue 提供。
- 將 pages/notfound.vue 調整成全站的 404 頁面。畫面的 HTML 和 CSS 已經在 pages/notfound.vue 中提供。請在 {{ page }} 中渲染當前訪問頁面的路由路徑，並提供一個返回首頁的連結。

## Day 7 - 嵌套式路由、 useRouter & useRoute
將 /pages/room.vue 改為嵌套式路由，並實作房型列表與房型詳細頁面（不包含動態路由）

- 房型列表頁面的 URL 需對應 /room/，在此頁面使用 ES6 Fetch 或 axios 串接 前台房型 API ，將資料寫入 roomList 變數 ，並在模板的 v-for 使用 roomList 渲染資料。
- 承上，模板的 HTML 、CSS 已有在 /pages/room.vue 中提供，需將其移至房型列表頁面並補上 API 串接的 JavaScript 。
- 房型詳細頁面的 URL 需對應 /room/_id ，在此頁顯示 “房型詳細頁面” h2 標題。
- 房型列表頁面的列表渲染之後，經點擊可以換頁至 /room/_id 。
❗需注意 : /room/_id 的 /_id 是靜態路由，非動態路由，請建立名稱為_id.vue 的檔案。

- 在房型詳細頁面中提供一個「回上一頁」的按鈕，點擊後可以使用 router 方法返回 /room/ 的房型列表頁面。
- 確保房型頁面的巢狀路由內容能正確顯示。

## Day 6 - NuxtLink 與 路由基礎配置
- 建立前台首頁 ( index.vue ) 以及房型頁面 (room.vue) 。前台首頁對應的路由路徑為 / ，房型頁面的路由路徑為/room。
- 頁面上只需呈現純文字。前台首頁顯示 “首頁頁面” ，房型頁面 顯示“房型頁面”
```
<!-- 前台首頁 -->
<template>
 <h1>首頁頁面</h1>
</template>

<!-- /room 房型頁面 -->
<template>
  <h1>房型頁面</h1>
</template>
```
- 將 app.vue 預設的 <NuxtWelcome /> 歡迎改成可以顯示頁面的內容 。
- 在 layouts/default.vue 的 Layout 中已有載入 Bootstrap5 SCSS 及 Navbar 元件。需在 layouts/default.vue 的 Navbar 加入 <NuxtLink> 元件，實現切換頁面的功能。
- 修改路由預設的 linkActiveClass 和 linkExactActiveClass ，使 <NuxtLink> 匹配到路由的時候可以套用 Bootstrap5 的 .active class 。

## Day 5 - 使用指令建立 Composables
- 在 pages/Day5.vue 使用 ES6 fetch 或是 axios 串接前台 最新消息 API ( GET ) ，將資料寫入 newsList 並且切換 Loading 元件開啟、關閉的狀態。
- 將 newsList 資料在 <NewsCard /> 以 v-for 渲染卡片，並將 props 傳入<NewsCard /> 元件
- 將資料和 API 的方法移至 composables/useHome.js ，改成使用 composable 引入方法與資料

## Day 4 - 使用指令建立元件
- 將 components/ProductCard.vue  卡片的圖片、標題、價格、按鈕拆分成單獨的元件 ( 如下圖 ) ，並且在 product/card 資料夾下進行管理。
- ProductCard.vue 的 CSS 需要跟元件一起拆分。props 的資料需要傳入元件。
- 在 pages/index.vue 的模板可以正常顯示卡片元件。

## Day 3 - 使用指令建立 Layouts 解答
- 使用 Nuxt3 Layout 功能拆分前台與後台的頁首頁尾區塊
- 前台 index.vue 與 about.vue 頁面皆使用 default.vue 模板 ( 預設 Layout ）
- 後台 admin/index.vue 與 admin/order.vue 頁面皆使用 admin.vue 模板 ( 具名 Layout )

## Day 2 - Nuxt3 專案引入 CSS 樣式 題目
請 clone 這一份模板，在 Nuxt3 引入 Bootstrap5  v5.3.3 並達成以下條件 :
- 設置  assets/stylesheets   資料夾，在內層新增 all.scss 檔案並引入以下 [bootstrap5 的 SCSS](https://getbootstrap.com/docs/5.3/customize/sass/#importing)

```scss
// assets/stylesheets/all.scss

@import "bootstrap/scss/functions";

@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";

@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";

@import "bootstrap/scss/utilities";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/containers";

@import "bootstrap/scss/buttons";

@import "bootstrap/scss/utilities/api";

```

- 在 Nuxt.config.ts 將  all.scss 加入全域共用樣式
- 新增 page/index 頁面，並使用 Bootstrap5  [按鈕元件](https://getbootstrap.com/docs/5.3/components/buttons/#variants)
- 在 Nuxt.config.ts 設定全域共用 bootstrap5  的 SCSS 變數 ，並且可以直接使用在 .vue 檔案內的 `<style></style>`

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day2-style  https://github.com/jasonlu0525/nuxt3-live-question.git day2-style-question
```

### 移動到專案內

```bash
cd  day2-style-question 
```

### 安裝套件

```bash
npm install
```

### 運行專案

```bash
npm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:3000/
```
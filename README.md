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
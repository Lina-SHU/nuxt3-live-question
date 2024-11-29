<script setup>
const message = ref("A1B2c3deFGhijk");
const time = ref(1730427600000);
</script>

<template>
  <div>
    <h1>首頁頁面</h1>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>

    <h1>產品</h1>
    <ProductCard
        imageSrc="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png"
        altText="享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢"
        title="尊爵雙人房"
        price="NT$10000"
        buttonText="馬上預約"
      />
  </div>

  <h2>自訂英文文字大小寫轉換指令</h2>
  <!-- 使用 plugins/textformat.js 建立的指令，將變數 message 的字串帶入 -->

  <!-- 大寫轉小寫格式之後，將結果寫入元素 -->
  <p v-textcase:lowercase="message"></p>
  <!-- 小寫轉大寫格式之後，將結果寫入元素 -->
  <p v-textcase:uppercase="message"></p>


  <h2>自訂時間轉換指令</h2>
  <!-- 使用 plugins/timeformat.js 建立的指令，將變數 time 的時間戳帶入 -->
  <!-- 轉換成 yyyy-mm-dd hh:mm:ss 格式之後將結果寫入元素 -->
  <!-- 1730427600000 => 轉換成 yyyy-mm-dd hh:mm:ss  -->
  <p v-timeformat="time"></p>
</template>

<style scoped lang="scss">
h1 {
  color: $primary;
}
</style>

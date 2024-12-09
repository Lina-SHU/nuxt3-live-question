<script setup>
import { useScreens } from 'vue-screen-utils';
/*
起始日期 => 當前日期
結束日期 => 下一天
日期格式需要是  YYYY-MM-DD
*/
let endDate = new Date();
endDate.setDate(new Date().getDate() + 1);
endDate = endDate.toLocaleDateString().replaceAll('/', '-');
const date = ref({
  start: new Date().toLocaleDateString().replaceAll('/', '-'),
  end: endDate
});

/*
調整日期的格式
*/
const masks = ref({
  title: "西元 YYYY 年 MM 月",
  modelValue: "YYYY-MM-DD",
});

/*
  使用  vue-screen-utils 套件調整響應式設定
*/
const { mapCurrent } = useScreens({
  md: "768px", // 等同於 (min-width: 768px)
});
// 在 767px 以下的手機版型顯示 1 欄 1 列 ；在 768px 以上的平板與電腦版型顯示 2 欄 1 列
const columns = mapCurrent({ md: 2 }, 1);

const minDate = ref(new Date());
const maxDate = ref(new Date().setFullYear(new Date().getFullYear() + 1));

// 日曆標題在 767px 以下置中對齊，768px 以上靠左對齊。
const titlePosition = mapCurrent({ md: 'left' }, 'center');
// 在 767px 以下的手機版型，日曆元件的寬度呈現滿寬
const isExpended = mapCurrent({ md: false }, true);
</script>

<template>
  <div class="container mt-5 date-picker">
    <ClientOnly>
      <!-- 加入 DatePicker 實作日期選取的功能  -->
      <VDatePicker
        v-model.range.string="date"
        :columns="columns"
        :masks="masks"
        :expanded="isExpended"
        :minDate="minDate"
        :maxDate="maxDate"
        color="primary"
        :title-position="titlePosition"
    />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.date-picker {
  // 使用 CSS 變數覆蓋 VCalendar 套件的預設樣式
  :deep(.vc-primary) {
    --vc-accent-200: #f9f9f9;
    --vc-accent-600: #000000;
    --vc-accent-700: #000000;
  }
  :deep(.vc-title) {
    background: none;
  }
  :deep(.vc-arrow) {
    background: none;
  }
  :deep(.vc-pane-layout) {
    gap: 60px;
  }
}
</style>
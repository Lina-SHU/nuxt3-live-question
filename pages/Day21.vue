<script setup>
const submitButtonRef = ref(null);
const formRef = ref(null);

const confirmReservation = () => {
  submitButtonRef.value.click();
};

const onSubmit = (value = {}, { resetForm }) => {
  console.log("送出的值:", value);
  alert("送出訂房!");
  // 改成用 VeeValidate  的 resetForm 方法將表單重置
  resetForm();
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <section>
          <h2 class="mb-4 fw-bold">訂房人資訊</h2>
          <Form @submit="onSubmit" ref="formRef" v-slot="{ errors }">
            <div class="mb-4">
              <label for="name" class="form-label fw-bold">姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                :class="{ 'is-invalid': errors['姓名'] }"
                class="form-control p-3 rounded-3"
                placeholder="請輸入姓名"
                rules="required|min:2"
              />
              <ErrorMessage name="姓名" class="invalid-feedback" />
            </div>

            <div class="mb-4">
              <label for="phone" class="form-label fw-bold">手機號碼</label>
              <Field name="手機號碼" v-slot="{ field }" rules="required|isPhone">
                <input id="phone" v-bind="field" type="tel" class="form-control p-3 rounded-3" :class="{ 'is-invalid': errors['手機號碼'] }" placeholder="請輸入手機號碼">
              </Field>
              <ErrorMessage name="手機號碼" class="invalid-feedback" />
            </div>

            <div class="mb-4">
              <label for="email" class="form-label fw-bold">電子信箱</label>
              <Field name="電子信箱" v-slot="{ field }" rules="required|email">
                <input id="email" v-bind="field" type="email" class="form-control p-3 rounded-3" :class="{ 'is-invalid': errors['電子信箱'] }" placeholder="請輸入電子信箱">
              </Field>
              <ErrorMessage name="電子信箱" class="invalid-feedback" />
            </div>

            <div class="mb-4">
              <label for="road" class="form-label fw-bold">地址</label>
              <div class="d-flex gap-2 mb-4">
                <div class="w-50">
                    <Field name="縣市" as="select" class="form-select p-3 fw-medium rounded-3" :class="{ 'is-invalid': errors['縣市'] }" rules="required">
                        <option selected disabled value="">請選擇縣市</option>
                        <option value="高雄市">高雄市</option>
                    </Field>
                    <ErrorMessage name="縣市" class="invalid-feedback" />
                </div>
                <div class="w-50">
                    <Field name="行政區" as="select" class="form-select p-3 fw-medium rounded-3" :class="{ 'is-invalid': errors['行政區'] }" rules="required">
                        <option selected disabled value="">請選擇行政區</option>
                        <option value="前金區">前金區</option>
                        <option value="鹽埕區">鹽埕區</option>
                        <option value="新興區">新興區</option>
                    </Field>
                    <ErrorMessage name="行政區" class="invalid-feedback" />
                </div>
              </div>
              <Field
                id="road"
                name="地址"
                type="text"
                :class="{ 'is-invalid': errors['地址'] }"
                class="form-control p-3 rounded-3"
                placeholder="請輸入詳細地址"
                rules="required"
              />
              <ErrorMessage name="地址" class="invalid-feedback" />
            </div>
            <button ref="submitButtonRef" type="submit" class="d-none"></button>
          </Form>
        </section>
      </div>
      <div class="col-md-5">
        <img
          class="img-fluid rounded-3"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png"
          alt="尊爵雙人房"
        />
        <div class="my-5">
          <h2 className="mb-3 fw-bold">價格詳情</h2>
          <div
            class="d-flex justify-content-between align-items-center mb-3 fw-medium"
          >
            <span>NT$ 10,000 X 2 晚 </span>
            <span>NT$ 20,000</span>
          </div>
          <div
            class="d-flex justify-content-between align-items-center fw-medium"
          >
            <p class="mb-0">住宿折扣</p>
            <span class="text-info">-NT$ 1,000</span>
          </div>
          <hr class="my-3" />
          <div
            class="d-flex justify-content-between align-items-center fw-bold"
          >
            <p class="mb-0">總價</p>
            <span>NT$ 19,000</span>
          </div>
        </div>

        <button
          class="btn btn-lg btn-primary w-100 fw-bold rounded-3"
          type="button"
          @click="confirmReservation"
        >
          確認訂房
        </button>
      </div>
    </div>
  </div>
</template>
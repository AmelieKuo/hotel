<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { FETCH_USER } from '../services';

/** @const {String} HTTPS 請求方法 */
const requestMethods = ref('');
/** @const {object} 路由 */
const route = useRoute();
/** @const {String} 請求的 ID */
const employeeID = ref('');
/** @const {object} 員工資訊 */
const employeeData = ref({});

/** @func 新增 POST 請求 */
async function addUser() {
  requestMethods.value = 'POST';
  const data = await FETCH_USER.addUser(employeeID.value);

  employeeData.value = data.respData;
}

/** @func 更新 PUT 請求 */
async function updatedUser() {
  requestMethods.value = 'PUT';
  const data = await FETCH_USER.updated(employeeID.value);

  employeeData.value = data.respData;
}

/** @func 更新部分 PATCH 請求 */
async function updatedTitle() {
  requestMethods.value = 'PATCH';
  const data = await FETCH_USER.updatedTitle(employeeID.value);

  employeeData.value = data.respData;
}

/** @func 刪除 DELETE 請求 */
async function delUser() {
  requestMethods.value = 'DELETE';
  const data = await FETCH_USER.updatedTitle(employeeID.value);

  employeeData.value = data.respData;
}

/** @func 獲取 GET 請求 */
async function getUesrInfo() {
  employeeID.value = route.params.id;
  requestMethods.value = 'GET';
  const data = await FETCH_USER.updatedTitle(employeeID.value);

  employeeData.value = data.respData;
}

onMounted(() => {
  getUesrInfo();
});

const showCat = ref(false);

</script>

<template>
  <section class="relative employee flex flex-col justify-center w-full gap-30px">
    <h1 class="w-full text-center text-32px hover:text-purple-400 relative" @mousemove="showCat = true">
      <router-link to="/"
        class="relative before:absolute before:-top-7px before:-left-30px before:content-[url(/images/return.svg)]">Amelie
        Hotel
      </router-link>
    </h1>
    <div class="m-[0_auto] flex gap-10px w-60% justify-evenly items-center">
      <button class="bg-yellow-200 hover:bg-yellow-400 p-[10px_30px] min-w-200px rounded-md"
        @click="addUser">POST</button>
      <button class="bg-blue-200 hover:bg-blue-400 p-[10px_30px] min-w-200px rounded-md" @click="updatedUser">PUT</button>
      <button class="bg-green-200 hover:bg-green-400 p-[10px_30px] min-w-200px rounded-md"
        @click="updatedTitle">PATCH</button>
      <button class="bg-pink-200 hover:bg-pink-400 p-[10px_30px] min-w-200px rounded-md" @click="delUser">DELETE</button>
    </div>

    <div class="w-full p-x-20px">
      <div class="border border-solid border-gray-400 p-30px">
        <h2 class="text-20px fw-bold m-b-20px" :class="requestMethods == '' ? 'text-center' : 'text-left'">{{
          requestMethods != '' ?
          requestMethods :
          '請按按鈕，謝謝' }}</h2>
        <p v-if="requestMethods == 'POST' || requestMethods == 'PUT'">id：{{ employeeData.id }}</p>
        <div v-if="requestMethods == 'GET' || requestMethods == 'PATCH' || requestMethods == 'DELETE'">
          <p>userId：{{ employeeData.userId }}</p>
          <p>id：{{ employeeData.id }}</p>
          <p>title：{{ employeeData.title }}</p>
          <p>body：{{ employeeData.body }}</p>
        </div>
      </div>
    </div>

    <div v-if="showCat" class="absolute left-0 right-0 top-500px m-[0_auto] w-80%" @click="showCat = false">
      <img src="/images/cats.jpg" class="w-full">
    </div>
  </section>
</template>

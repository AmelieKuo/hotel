<script setup>
import { ref, onMounted } from 'vue';
import { FETCH_ROOMS, FETCH_USER } from '../services';

/** @const {Array} 六角學院房型資料清單 */
const roomsData = ref([]);

/** @func 獲取房型資料' */
async function getHotelRooms() {
  const data = await FETCH_ROOMS.hotelRooms();
  const { items, success } = data.respData;
  if (success) {
    roomsData.value = items;
  }
}

/** @const {Array} jsonplaceholder 員工清單 */
const employeeData = ref([]);

/** @func 獲取員工資料' */
async function getHotelEmployee() {
  const data = await FETCH_USER.userList();
  employeeData.value = data.respData;
}

onMounted(() => {
  getHotelRooms();
  getHotelEmployee();
});

</script>

<template>
  <section class="hotel flex flex-col justify-center w-full">
    <h1 class="w-full text-center text-32px hover:text-pink-400">
      <router-link to="/" class="max-w-full max-h-250px box-border">
        Amelie Hotel
      </router-link>
    </h1>

    <div class="w-full p-20px">
      <h2 class="w-full text-left text-26px m-b-40px p-l-50px fw-bold">房型種類</h2>
      <ul class="w-full flex flex-wrap justify-center gap-20px">
        <li v-for="(item, index) in roomsData" :key="index"
          class="border-2px border-solid border-gray-300 max-w-300px h-600px min-h-600px hover:border-blue-400 hover:border-5px shadow-lg">
          <router-link :to="'/room/' + item.id" class="h-100% flex flex-col justify-between">
            <div class="w-full overflow-hidden">
              <img :src="item.imageUrl" :alt="`${item.name}的圖片`" class="h-full object-center">
            </div>
            <div class="w-full p-b-50px p-x-10px">
              <h3>{{ item.name }}</h3>
              <p>平日房價：{{ item.normalDayPrice }} / 假日房價：{{ item.holidayPrice }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="w-full p-20px">
      <h2 class="w-full text-left text-26px m-b-40px p-l-50px fw-bold">房務人員清單</h2>
      <ul class="w-full flex flex-wrap justify-center gap-20px">
        <li v-for="(employee, index) in employeeData" :key="index"
          class="border border-solid border-gray-300 hover:border-green-400 hover:border-5px w-300px h-250px overflow-hidden p-20px box-border shadow-lg">
          <router-link :to="'/employee/' + employee.id" class="max-w-full max-h-250px box-border">
            <h3 class="fw-bold mb-30px">員工姓名：{{ employee.title }}</h3>
            <p>員工編號：{{ employee.id }}</p>
            <p class="w-full h-40% overflow-hidden text-clip">員工介紹：{{ employee.body }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

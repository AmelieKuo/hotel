<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { FETCH_ROOMS } from '../services';

/** @const {object} 路由 */
const route = useRoute();
/** @const {object} 房間資訊 */
const roomData = ref({});

/** @func 獲取房型資料' */
async function getRoomInfo() {
  const roomID = route.params.id;
  const data = await FETCH_ROOMS.roomInfo(roomID);
  const { room, success } = data.respData;
  if (success) {
    // eslint-disable-next-line prefer-destructuring
    roomData.value = room[0];
    console.log(roomData.value);
  }
}

onMounted(() => {
  getRoomInfo();
});

</script>

<template>
  <section class="room flex flex-col justify-center w-full gap-30px">
    <h1 class="w-full text-center text-32px hover:text-blue-400">
      <router-link to="/"
        class="relative before:absolute before:-top-7px before:-left-30px before:content-[url(/images/return.svg)]">Amelie
        Hotel
      </router-link>
    </h1>
    <div class="w-100% border-3px border-dashed p-20px">
      <div class="w-100%">
        <h1 class="w-full text-left text-32px m-b-20px text-orange-400">{{ roomData.name }}</h1>
        <p>{{ roomData.description }}</p>
        <p class="m-t-20px text-20px fw-bold">平日房價：{{ roomData.normalDayPrice }} / 假日房價：{{ roomData.holidayPrice }}</p>
      </div>
      <div class="w-100% m-t-20px">
        <div class="w-full flex gap-10px">
          <div v-for="(picture, index) in roomData.imageUrl" :key="index" class="h-300px min-h-300px">
            <img :src="picture" :alt="`${roomData.name} (${index})`" class="h-full object-center">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

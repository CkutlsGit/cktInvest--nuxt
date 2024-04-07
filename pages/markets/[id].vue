<template>
  <div class="active-info mt-16">
    <div class="active-info__content bg-gray-500 text-white font-medium font-custom-poppins rounded-2xl container mx-auto min-h-96 max-h-96 overflow-y-auto p-6">
      <div v-if="!statusClaimData">
        <LoaderComponent/>
      </div>
      <div v-else class="info-block">
        <h1>{{ activeInfo.name }}</h1>
        <p>{{ activeInfo.description }}</p>
        <div class="info-count-precent mt-2 flex items-center">
          <h2>{{ activeInfo.price.start }} | {{ activeInfo.price.end }} АР</h2>
          <h2 class="ml-2" :class="GetColor(activeInfo.pricehistory[0], activeInfo.price.start)">{{ GetPrecent(activeInfo.pricehistory[0], activeInfo.price.start) }}%</h2>
        </div>
        <div v-if="Object.keys(activeInfo.news).length !== 0" class="news-block mt-6">
          <h1>Новости компании</h1>
          <ul class="max-h-56 overflow-y-auto">
            <li class="mt-6" v-for="(news, index) in activeInfo.news" :key="index">
              <h1 class="mb-1">{{ news.title }}</h1>
              <p class="mb-2">{{ news.description }}</p>
              <h2>{{ index }}</h2>
            </li>
          </ul>
        </div>
      </div>
      <div class="price-history-block mt-6">
        <h2></h2>
        <ChartComponent/>
      </div>
    </div>
  </div>
</template>

<!--<h1 :class="GetColor(active.pricehistory[0], active.price.start)">{{ GetPrecent(active.pricehistory[0], active.price.start) }}%</h1>-->
<script setup>
  import GetPrecent from "~/utils/getPrecent.js";
  import GetColor from "~/utils/getColor.js";
  import ChartComponent from "~/components/ChartComponent.vue";

  let activeInfo = reactive({})
  const statusClaimData = ref(false)
  const route = useRoute()
  const { $bus } = useNuxtApp()

  onMounted(async () => {
    const data = await $fetch(`/api/securites/validate/checkvalidate`, {
      method: 'POST',
      body: {
        name: route.params.id
      }
    })

    if (data) {
      statusClaimData.value = true

      Object.assign(activeInfo, data)

      $bus.emit('sendPriceHistory', activeInfo.pricehistory)
    }
    else {
      statusClaimData.value = true

      throw createError({ statusCode: 404, statusMessage: 'Котировка не найдена.', fatal: true })
    }
  })

</script>

<style scoped>

</style>
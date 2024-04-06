<template>
  <div class="securites-block mt-6">
    <div class="securites-block__content bg-gray-500 rounded-2xl w-96 p-6 max-sm:w-40">
      <div v-if="!statusClaimData" class="relative left-36">
        <LoaderComponent/>
      </div>
      <div v-else class="element text-white text-xl">
        <ul class="element__content max-w-full mx-auto flex flex-col">
          <li v-for="info in popularSecurites" :key="info.id">
            <NuxtLink to="/markets" class="flex justify-between cursor-pointer max-sm:flex-col max-sm:text-center max-sm:mt-4">
              <h1>{{ info.name }}</h1>
              <h1>{{ info.price.start }} АР</h1>
              <h1 :class="getPriceColor(info.pricehistory[0], info.price.start)">{{ getPrecentSecurites(info.pricehistory[0], info.price.start) }}%</h1>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  let popularSecurites = reactive({})
  const statusClaimData = ref(false)

  onMounted(async () => {
    const data = await $fetch('/api/securites/getpopularsecurites')

    if (data) {
      statusClaimData.value = true
    }

    Object.assign(popularSecurites, data)
  })

  function getPrecentSecurites(endPrice, startPrice) {
    const differencePrice = startPrice - endPrice
    const precentPrice = differencePrice / endPrice * 100

    return precentPrice.toFixed(2)
  }

  function getPriceColor(endPrice, startPrice) {
    const diffirencePrice = startPrice - endPrice

    switch (Math.sign(diffirencePrice)) {
      case 1:
        return 'text-green-500'
      case -1:
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

</script>

<style scoped>

</style>
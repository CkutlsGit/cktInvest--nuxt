<template>
  <div class="securites-block">
    <div class="securites-block__content bg-gray-500 container w-screen">
      <div class="element">
        <ul class="element__content">
          <li v-for="(info, index) in popularSecurites" :key="index">
            <h1>{{ info.name }}</h1>
            <h1>{{ info.price.start }}</h1>
            <h1 :class="getPriceColor(info.pricehistory[0], info.price.start)">{{ getPrecentSecurites(info.pricehistory[0], info.price.start) }}%</h1>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  let popularSecurites = reactive({})

  onMounted(async () => {
    const data = await $fetch('/api/securites/getpopularsecurites')

    Object.assign(popularSecurites, data)
  })

  function getPrecentSecurites(endPrice, startPrice) {
    const differencePrice = startPrice - endPrice
    const precentPrice = differencePrice / endPrice * 100
    console.log(endPrice, startPrice, differencePrice, precentPrice)

    return precentPrice.toFixed(2)
  }

  function getPriceColor(endPrice, startPrice) {
    const deffirencePrice = startPrice - endPrice

    return deffirencePrice >= 0 ? 'text-green-500' : 'text-red-500'
  }

</script>

<style scoped>

</style>
<template>
  <div class="markets mt-16">
    <div class="markets__content container mx-auto bg-gray-500 rounded-2xl min-h-52">
      <div v-if="!statusClaimData" class="absolute left-1/2 -translate-x-1/2 top-56">
        <LoaderComponent/>
      </div>
      <div class="element text-white text-xl" v-else>
        <ul class="element__content">
          <li class="pt-0.5" v-for="active in securitesList" :key="active.id">
            <NuxtLink :to="`markets/${ active.name }`" class="flex justify-around mt-4 cursor-pointer max-sm:flex-col max-sm:items-center">
              <h1>{{ active.name }}</h1>
              <h1>{{ active.price.start }} | {{ active.price.end }}</h1>
              <h1 :class="GetColor(active.pricehistory[0], active.price.start)">{{ GetPrecent(active.pricehistory[0], active.price.start) }}%</h1>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  import GetColor from "~/utils/getColor.js";
  import GetPrecent from "/utils/getPrecent.js";

  let securitesList = reactive({})
  const statusClaimData = ref(false)

  onMounted(async () => {
    const data = await $fetch('/api/securites/getallsecurites')

    if (data) {
      statusClaimData.value = true
    }

    Object.assign(securitesList, data)
  })

</script>

<style scoped>

</style>
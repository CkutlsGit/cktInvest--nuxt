<template>
  <div class="text-white bg-gray-500 w-96 mx-auto rounded-2xl">
    <div class="mt-7 max-w-sm mx-auto text-center card">
      <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
      <p class="mt-7 text-6xl">Ойй</p>
      <p class="mt-7">{{ error.message }}</p>
      <button class="btn my-7 hover:text-gray-600 duration-300 ease-in" @click="handleClearError">Вернуться назад...</button>
    </div>
  </div>
</template>

<script setup>
defineProps(['error'])

function handleClearError() {
  clearError({ redirect: '/' })
}

</script>

<style scoped>

</style>
<template>
  <div class="active-info">
    <div class="active-info__content">
      <div v-if="!statusClaimData">
        <LoaderComponent/>
      </div>
      <div v-else class="info-block">
        <h1>123123</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
  //
  const statusClaimData = ref(false)
  const route = useRoute()

  onMounted(async () => {
    const data = await $fetch(`/api/securites/validate/checkvalidate`, {
      method: 'POST',
      body: {
        name: route.params.id
      }
    })

    if (data) {
      statusClaimData.value = true
    }
    else {
      statusClaimData.value = true

      throw createError({ statusCode: 404, statusMessage: 'Котировка не найдена.', fatal: true })
    }
  })

</script>

<style scoped>

</style>
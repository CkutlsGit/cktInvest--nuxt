<template>
  <header class="header bg-green-custom-100">
    <div class="header__content flex flex-col items-center container mx-auto p-4">
      <div class="header__logo">
        <NuxtLink to="/">
          <h1 class="text-color-beige-custom-100 font-medium text-3xl font-custom-poppins cursor-pointer">
            <strong>CKT</strong>Invest
          </h1>
        </NuxtLink>
      </div>
      <div class="header__btn">
        <NuxtLink to="/markets" class="text-2xl text-color-beige-custom-150 font-medium font-custom-poppins cursor-pointer hover:text-gray-300 default-animation">
          Котировки
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>

</style>
<template>
  <div>
    <div class="flex justify-self-cent w-screen h-9 bg-c bg-violetLightPrimary">
      <div class="my-auto">
        <NuxtLink to="/" class="vert">Main</NuxtLink>
      </div>
      <div class="ml-6 my-auto" v-for="summoner in summoners" :key="summoner">
        <NuxtLink :to="'/summoners/' + summoner">{{ summoner }}</NuxtLink>
      </div>
      <div class="ml-6 my-auto">
        <NuxtLink to="/match/RU_379886633">
          RU_379886633
        </NuxtLink>
      </div>
    </div>
    <slot/>
  </div>
</template>

<script lang="ts" setup>
const summoners = ['Wellwakeup', 'Laymorus'];
</script>

<style>

</style>

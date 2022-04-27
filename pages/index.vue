<template>
  <div>
    <div>Input value: {{ searchInputValue }}</div>
    <div class="flex w-screen h-10 mt-16">
      <div class="h-full mx-auto">
        <input type="text" v-model="searchInputValue"
               @keyup="searchTextEnterPress"
               class="
               w-96
               h-full
               bg-violetLightPrimary
               pl-2
               rounded-l-xl
               border-2
               border-solid
               border-violetPrimary
               focus:outline-none">
        <input type="button" value="Search" @click="searchBtnClick"
               class="
               w-20
               h-full
               rounded-r-xl
               cursor-pointer
               text-blackPrimary
               bg-violetPrimary
               active:bg-violetLightPrimary">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const searchInputValue = ref('');

const searchBtnClick = () => {
  navigateTo(`/summoners/${searchInputValue.value}`)
}

const searchTextEnterPress = (event) => {
    if (event.key === "Enter") {
      searchBtnClick()
    }
}
</script>

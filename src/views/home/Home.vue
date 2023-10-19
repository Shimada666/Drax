<script lang="ts" setup>
import MySwiper from '@/views/home/MySwiper.vue'
import { DemoApi } from '@/api/demo'

DemoApi.test().then(res => console.log(res))
</script>

<template>
  <MySwiper />
</template>

<style lang="scss" scoped>

</style>

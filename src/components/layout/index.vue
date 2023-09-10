<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Nav from '@/components/layout/Nav.vue'
import SideBar from '@/components/layout/Sidebar.vue'

const route = useRoute()
</script>

<template>
  <a-layout id="layout">
    <Nav class="nav" />
    <a-layout class="layout-view">
      <SideBar />
      <a-layout style="padding: 24px 24px;">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0 }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
#layout {
  .layout-view {
    min-height: calc(100vh - 48px);
  }
}
</style>

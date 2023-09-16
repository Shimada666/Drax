<script lang="ts" setup>
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'
</script>

<template>
  <a-layout class="layout">
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', marginTop: '24px', minHeight: '280px' }">
        Content
      </div>
    </a-layout-content>
    <a-layout-footer>
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>

<style lang="scss" scoped>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>

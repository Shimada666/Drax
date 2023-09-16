<script setup lang="ts">
import { ref } from 'vue'

const selectedKeys = ref<string[]>([])
</script>

<template>
  <div class="logo" />
  <a-menu
    v-model:selectedKeys="selectedKeys"
    theme="dark"
    mode="horizontal"
    :style="{ lineHeight: '64px' }"
  >
    <a-menu-item key="1">
      首页
    </a-menu-item>
    <a-menu-item key="2">
      产品动态
    </a-menu-item>
    <a-menu-item key="3">
      新闻中心
    </a-menu-item>
    <a-menu-item key="4">
      关于我们
    </a-menu-item>
    <a-menu-item key="5">
      加入我们
    </a-menu-item>
  </a-menu>
</template>

<style scoped lang="scss">
.logo {
  float: left;
  width: 32px;
  height: 32px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl .logo {
  float: right;
  margin: 16px 0 16px 24px;
}
</style>

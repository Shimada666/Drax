<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Logo from '@/components/Logo.vue'

const router = useRouter()
const route = useRoute()

const selectedKeys = ref<string[]>([route.name as string])
const navItems = ref([
  { key: 'home', name: '首页' },
  { key: 'product', name: '产品动态' },
  { key: 'news', name: '新闻中心' },
  { key: 'about', name: '公司介绍' },
  { key: 'join', name: '加入我们' },
])
function handleNavItemClick({ item, key, keyPath }) {
  router.push(`/${key}`)
}
</script>

<template>
  <div class="logo">
    <Logo type="white" />
  </div>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    theme="dark"
    mode="horizontal"
    :style="{ lineHeight: '64px' }"
    @click="handleNavItemClick"
  >
    <a-menu-item v-for="item in navItems" :key="item.key">
      {{ item.name }}
    </a-menu-item>
  </a-menu>
</template>

<style scoped lang="scss">
.logo {
  float: left;
  width: 32px;
  height: 32px;
  margin: 16px 24px 16px 0;
  //background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl .logo {
  float: right;
  margin: 16px 0 16px 24px;
}
</style>

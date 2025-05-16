<template>
  <a-layout style="min-height: 100vh;">
    <a-layout-sider collapsible>
      <the-sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;">
        <the-header />
      </a-layout-header>
      <a-layout-content style="margin: 16px;">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import TheSidebar from '@/layouts/TheSidebar.vue';
import TheHeader from '@/layouts/TheHeader.vue';
// Add your composition API logic here

</script>

<style scoped>
</style>
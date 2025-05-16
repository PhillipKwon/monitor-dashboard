<template>
  <a-menu theme="dark" mode="inline" :selectedKeys="['/']">
    <a-menu-item key="/">
      <router-link to="/">Dashboard</router-link>
    </a-menu-item>
    <a-menu-item key="/services">
      <router-link to="/services">Services</router-link>
    </a-menu-item>
  </a-menu>
</template>
<script setup>
</script>
<script setup lang="ts">
import Container from './components/layout/container.vue'
</script>

<template>
  <container>
    <router-view />
  </container>
</template>

<style>
@font-face {
  font-family: 'Helvetica';
  src: url('./assets/font/helvetica.woff') format('woff');
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>

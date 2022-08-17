<script setup lang="ts">
import Heading from '../components/Text/heading.vue'
components: {
  Heading
}
</script>

<template>
  <div>
    <h2>Text Components</h2>
    <Heading tag="h1">I am the h1</Heading>
    <Heading tag="h2">I am the h2</Heading>
    <Heading tag="h3">I am the h3</Heading>
    <Heading tag="h3" color="red">You can also color me</Heading>
  </div>
</template>

<style scoped></style>

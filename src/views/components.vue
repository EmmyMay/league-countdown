<script setup lang="ts">
import Heading from '../components/Text/heading.vue'
import Epl from '../components/icons/epl.vue'
import Instagram from '../components/icons/instagram.vue'
import Twitter from '../components/icons/twitter.vue'
import Container from '../components/layout/container.vue'
</script>

<template>
  <div>
    <h2>Text Components</h2>
    <Heading tag="h1">I am the h1</Heading>
    <Heading tag="h2">I am the h2</Heading>
    <Heading tag="h3">I am the h3</Heading>
    <Heading tag="h3" color="aquamarine">You can also color me</Heading>
  </div>
  <div>
    <Heading tag="h2" class="mb-5">Icon Components</Heading>
    <container class="flex justify-center items-center space-x-4">
      <Epl width="70" height="70"></Epl>
      <Instagram width="50" height="50"></Instagram>
      <Twitter width="50" height="50" path-fill="red"></Twitter>
    </container>
  </div>
</template>

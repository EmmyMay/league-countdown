<script lang="ts">
interface Props {
  color?: string
  tag?: string
}
</script>

<script setup lang="ts">
withDefaults(defineProps<Props>(), {
  color: 'black',
  tag: 'h1',
})
</script>

<template>
  <component
    :is="tag"
    :style="{ color: color }"
    :class="[
      tag === 'h1' ? 'text-h1-mobile lg:(text-h1 font-bold)' : '',
      tag === 'h2' ? ' text-base lg:text-h2' : '',
      tag === 'h3' ? ' text-base lg:text-h3' : '',
    ]"
  >
    <slot />
  </component>
</template>

<style scoped></style>

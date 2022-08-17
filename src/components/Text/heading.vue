<script lang="ts">
interface Props {
  color?: string
  tag?: string
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<Props>(), {
  color: 'black',
  tag: 'h1',
})
const color = ref(`text-${props.color}`)
</script>

<template>
  <component :is="tag" :class="[color, tag === 'h1' ? 'lg:text-h1' : '']">
    <slot />
  </component>
</template>

<style scoped></style>

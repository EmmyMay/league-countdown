<script lang="ts">
interface Props {
  width?: string
  height?: string
  fill?: string
  color?: string
}
</script>
<script setup lang="ts">
withDefaults(defineProps<Props>(), {
  width: '27',
  height: '27',
  fill: 'none',
  color: '#797979',
})
</script>
<template>
  <img
    :width="width"
    :height="height"
    class="block"
    src="/src/assets/epl.png"
    alt="The premier league logo"
  />
</template>

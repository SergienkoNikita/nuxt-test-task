<script setup lang="ts">
import {
  computed, useAttrs,
  useSprite,
} from '#imports';

const attrs = useAttrs();

const props = defineProps<{
  name: string,
}>();

const icon = await useSprite(props.name);

const isHasFillClass = computed<boolean>(() => (
  typeof attrs.class === 'string' && attrs.class.includes('fill-')
));

</script>

<template>
  <svg
    viewBox="0 0 30 30"
    width="30"
    height="30"
    :class="{ 'fill-current': !isHasFillClass }"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use
      :xlink:href="icon.url"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    />
  </svg>
</template>

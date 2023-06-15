<script setup lang="ts">
defineProps<{
  errorMessage?: string,
}>();
</script>

<template>
  <div class="flex flex-col">
    <div
      class="flex justify-between
             py-[17px] rounded-md border border-blue-200/50 bg-blue-200/10"
    >
      <slot name="prefix" />
      <slot />
      <slot name="postfix" />
    </div>
    <span
      v-if="errorMessage"
      class="text-xs-medium my-1 self-start ml-2 leading-[12px] text-danger"
    >{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
:slotted(input) {
  @apply bg-transparent w-full h-[30px] px-[10px];
}

:slotted(input::placeholder) {
  @apply text-blue-400/20;
}

:slotted(input:focus) {
  @apply outline-0;
}
</style>

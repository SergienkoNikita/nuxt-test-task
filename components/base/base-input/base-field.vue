<script setup lang="ts">
defineProps<{
  errorMessage?: string,
  isFocus?: boolean,
}>();
</script>

<template>
  <div class="base-input-wrap">
    <div
      class="base-input"
      :class="{ danger: Boolean(errorMessage), focus: isFocus }"
    >
      <slot name="prefix" />
      <slot />
      <slot name="postfix" />
    </div>
    <span
      v-if="errorMessage"
      class="error-text"
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

.base-input-wrap {
  @apply flex flex-col;
}

.base-input {
  @apply flex justify-between
  py-[17px] rounded-md border border-blue-200/50 bg-blue-200/10;
}

.base-input.focus {
  @apply border-blue-200;
}

.base-input.danger {
  @apply border-danger/50;
}

.base-input.danger.focus {
  @apply border-danger/20;
}

.error-text {
  @apply text-xs-medium my-1 self-start ml-2 leading-[12px] text-danger;
}
</style>

<script setup lang="ts">
import { withDefaults } from 'vue';
import { useSlots } from '#imports';

const slots = useSlots();

const props = withDefaults(defineProps<{
  isVisible: boolean
}>(), {
  isVisible: false,
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="props.isVisible"
      class="fixed inset-0 z-20 bg-grey-800/40 w-full h-full flex"
    >
      <div
        class="flex flex-col bg-white-additional  m-auto rounded-lg
               justify-center items-center px-7 pt-6 pb-4"
      >
        <div
          v-if="slots.header"
          class="w-full flex-shrink min-h-20"
        >
          <slot name="header" />
          <hr class="bg-grey-400/50 mt-4 border-0 h-[1px] -mx-7">
        </div>

        <div>
          <slot />
        </div>

        <div
          v-if="slots.footer"
          class="w-full flex-shrink min-h-20"
        >
          <hr class="bg-grey-400/50 mb-4 border-0 h-[1px] -mx-7">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

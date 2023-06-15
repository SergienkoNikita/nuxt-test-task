<script setup lang="ts">

import BaseModal from '~/components/base/base-modal/base-modal.vue';
import BaseButton from '~/components/base/base-button/base-button.vue';

interface Emits {
  (event: 'update:model-value', value: boolean): void;
  (event: 'apply'): void;
  (event: 'dismiss'): void;
}

const props = withDefaults(defineProps<{
  modelValue?: boolean;
}>(), {
  modelValue: false,
});

const emits = defineEmits<Emits>();
const onSubmit = () => {
  emits('update:model-value', false);
  emits('apply');
};

const onDismiss = () => {
  emits('update:model-value', false);
  emits('dismiss');
};
</script>

<template>
  <BaseModal :is-visible="props.modelValue">
    <div class="flex flex-col justify-center h-[100px]">
      <h4>If you leave this page, the form data will be cleared.</h4>
    </div>
    <template #footer>
      <div class="flex w-full justify-end gap-x-5">
        <button
          class="text-blue-600 hover:text-blue-600/80"
          @click="onDismiss"
        >
          Cancel
        </button>
        <BaseButton
          class="w-[100px]"
          label="Agree"
          @click="onSubmit"
        />
      </div>
    </template>
  </BaseModal>
</template>

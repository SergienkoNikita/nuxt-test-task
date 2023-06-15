<script setup lang="ts">
import { ref, useForm, computed } from '#imports';

const {
  handleSubmit, values, meta, errors, handleReset: onReset,
} = useForm();

const form = ref<HTMLFormElement | null>();

const emits = defineEmits(['submit', 'validation-error']);

const focusFirstInvalidElement = (): void => {
  if (!form.value && !form.value?.elements) return;

  const formElements = Array.from(form.value.elements) as HTMLInputElement[];

  const firstInvalidElement = formElements.find((formElement) => (
    formElement.name && (formElement.name in errors.value)
  ));

  firstInvalidElement?.focus();
};

const onValidationError = (): void => {
  emits('validation-error');

  focusFirstInvalidElement();
};

const onSubmit = handleSubmit((fieldValues) => emits('submit', fieldValues), onValidationError);
const invalid = computed(() => !meta.value.valid);

defineExpose({ submit: onSubmit, invalid });
</script>

<template>
  <form
    ref="form"
    novalidate
    @reset.prevent="onReset"
    @submit="onSubmit"
  >
    <slot
      :invalid="invalid"
      :meta="meta"
      :errors="errors"
      :values="values"
    />
  </form>
</template>

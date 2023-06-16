<script setup lang="ts">
import { RuleExpression } from 'vee-validate';
import {
  computed, useField, useSlots, watch,
} from '#imports';

interface Emits {
  (event: 'update:model-value'): void;
}

const props = withDefaults(defineProps<{
  name: string;
  modelValue?: boolean;
  rules?: RuleExpression<boolean> | null;
  label?: string;
  disabled?: boolean
}>(), {
  disabled: false,
  label: '',
  modelValue: false,
  rules: null,
});

const emits = defineEmits<Emits>();
const slots = useSlots();

const localValue = computed<boolean>({
  get: (): boolean => props.modelValue,
  set: (value: boolean): void => {
    emits('update:model-value', value);
  },
});

const {
  value: valueForValidate,
  errorMessage,
  setTouched,
  validate,
} = useField(props.name, props.rules, {
  standalone: !props.name,
  initialValue: props.modelValue,
});

watch(() => props.modelValue, (newModalValue): void => {
  valueForValidate.value = newModalValue;

  if (newModalValue) return;

  setTouched(true);

  if (props.rules) validate();
});
</script>

<template>
  <div
    class="inline-flex flex-col"
    :class="{ disabled: props.disabled }"
  >
    <label
      class="base-checkbox"
      :class="{ error: Boolean(errorMessage) }"
    >
      <input
        v-model="localValue"
        type="checkbox"
        class="base-checkbox-input"
        :disabled="props.disabled"
        value=""
        @update:model-value="validate"
      >

      <span class="base-checkbox-checkmark" />

      <span
        v-if="slots.default || props.label"
        class="base-checkbox-label"
      >
        <slot>{{ label }}</slot>
      </span>
    </label>
    <span
      v-if="errorMessage"
      class="text-xs-medium my-1 self-start leading-[12px] text-danger"
    >{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
.base-checkbox {
  @apply relative align-middle inline-flex items-center gap-x-[10px]
  mb-0 select-none min-h-[20px] min-w-[20px] cursor-pointer text-sm-normal;
}

.base-checkbox .base-checkbox-label {
  @apply cursor-pointer;
}

.base-checkbox .base-checkbox-checkmark {
  @apply relative left-0 h-[20px] w-[20px] border border-blue-200 rounded-[3px] bg-transparent;
}

.base-checkbox .base-checkbox-checkmark::after {
  @apply content-[""] absolute top-[0.1em] left-[0.4em] w-[0.5em] h-[0.75em]
  border-r-[3px] border-b-[3px] border-white scale-0 rotate-45;
}

.base-checkbox-input {
  @apply absolute opacity-0 w-0 h-0 cursor-pointer;
}

.base-checkbox input:not(:disabled, :checked) ~ .base-checkbox-checkmark,
.base-checkbox:active input:not(:disabled, :checked) ~ .base-checkbox-checkmark {
  @apply border-blue-200;
}

.base-checkbox.error input:not(:disabled, :checked) ~ .base-checkbox-checkmark,
.base-checkbox.error:active input:not(:disabled, :checked) ~ .base-checkbox-checkmark {
  @apply border-danger
}

input:checked ~ .base-checkbox-checkmark {
  @apply bg-blue-200 border-none;
}

input:checked:hover ~ .base-checkbox-checkmark {
  @apply bg-blue-200/80;
}

input:disabled ~ .base-checkbox-label {
  @apply cursor-not-allowed opacity-50;
}

input:disabled ~ .base-checkbox-checkmark {
  @apply cursor-not-allowed opacity-50;
}

input:disabled ~ .base-checkbox-checkmark::after {
  @apply opacity-50;
}

input:checked ~ .base-checkbox-checkmark::after {
  @apply transition-all ease-in-out duration-100 scale-100;
}
</style>

<script setup lang="ts">
import { BaseInputEmits, BaseInputProps } from '~/components/base/base-input/types';
import {
  computed, useAttrs, useField, useSlots,
} from '#imports';
import BaseField from '~/components/base/base-input/base-field.vue';

const props = defineProps<BaseInputProps>();
const emits = defineEmits<BaseInputEmits>();
const attrs = useAttrs();
const slots = useSlots();

defineOptions({
  inheritAttrs: false,
});

const {
  handleChange,
  errorMessage,
  setErrors,
  setTouched,
  meta,
} = useField<BaseInputProps['modelValue']>(() => props.name, props.rules, {
  initialValue: props.modelValue,
});

const localValue = computed<BaseInputProps['modelValue']>({
  get() {
    return props.modelValue;
  },
  set(value) {
    handleChange(value);
    emits('update:model-value', value);
  },
});

defineExpose({ setErrors });
const onNativeControlBlur = () => {
  setTouched(true);
  emits('blur');
};

const onNativeControlFocus = () => {
  setTouched(false);
  emits('focus');
};
</script>

<template>
  <BaseField :error-message="meta.touched ? errorMessage : undefined">
    <template
      v-if="slots.prefix"
      #prefix
    >
      <slot name="prefix" />
    </template>

    <input
      v-bind="attrs"
      v-model="localValue"
      @blur="onNativeControlBlur"
      @focus="onNativeControlFocus"
    >

    <template
      v-if="slots.postfix"
      #postfix
    >
      <slot name="postfix" />
    </template>
  </BaseField>
</template>

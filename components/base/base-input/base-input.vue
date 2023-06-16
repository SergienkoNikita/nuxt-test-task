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
    setTouched(false);
    emits('update:model-value', value);
  },
});

const nativeControlAttributes = computed(() => {
  const nativeControlAttrs = { ...attrs };
  delete nativeControlAttrs.class;
  delete nativeControlAttrs.style;
  return nativeControlAttrs;
});

defineExpose({ setErrors });
const onNativeControlBlur = () => {
  setTouched(true);
  emits('blur');
};

const onNativeControlFocus = () => {
  emits('focus');
};
</script>

<template>
  <BaseField
    :class="attrs.class"
    :style="attrs.style"
    :error-message="meta.touched ? errorMessage : undefined"
  >
    <template
      v-if="slots.prefix"
      #prefix
    >
      <slot name="prefix" />
    </template>

    <input
      v-bind="nativeControlAttributes"
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

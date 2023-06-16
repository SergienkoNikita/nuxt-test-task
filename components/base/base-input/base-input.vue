<script setup lang="ts">
import { BaseInputEmits, BaseInputProps } from '~/components/base/base-input/types';
import {
  ref, computed, useAttrs, useField, useSlots,
} from '#imports';
import BaseField from '~/components/base/base-input/base-field.vue';

const props = defineProps<BaseInputProps>();
const emits = defineEmits<BaseInputEmits>();
const attrs = useAttrs();
const slots = useSlots();

defineOptions({
  inheritAttrs: false,
});

const nativeControl = ref<HTMLInputElement>();

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
const onNativeControlBlur = () => {
  setTouched(true);
  emits('blur');
};

const onNativeControlFocus = () => {
  emits('focus');
};

const onNativeControlInput = (event: InputEvent) => {
  emits('input', event);
};

const focus = (): void => {
  if (!nativeControl.value) return;

  nativeControl.value.focus();
  nativeControl.value.setSelectionRange(0, nativeControl.value.value.length);
};

defineExpose({ setErrors, focus });
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
      ref="nativeControl"
      v-bind="nativeControlAttributes"
      v-model="localValue"
      :class="props.nativeControlClass"
      @blur="onNativeControlBlur"
      @focus="onNativeControlFocus"
      @input="onNativeControlInput"
    >

    <template
      v-if="slots.postfix"
      #postfix
    >
      <slot name="postfix" />
    </template>
  </BaseField>
</template>

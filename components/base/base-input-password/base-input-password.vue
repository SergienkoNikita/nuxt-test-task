<script setup lang="ts">
import { BaseInput, BaseIcon } from '~/components/base';
import { computed, ref, useAttrs } from '#imports';
import { BaseInputEmits, BaseInputProps } from '~/components/base/base-input/types';

interface PasswordInputProps extends Omit<BaseInputProps, 'name'> {
  name?: string
}

const props = defineProps<PasswordInputProps>();
const emits = defineEmits<BaseInputEmits>();
const attrs = useAttrs();

const baseInput = ref<InstanceType<typeof BaseInput>>();

const isPasswordVisible = ref<boolean>(false);

const activeInputType = computed<'password' | 'text'>(() => (
  isPasswordVisible.value ? 'text' : 'password'
));

const togglePasswordVisible = (): void => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const setErrors = (error: string): void => {
  if (!baseInput.value) return;

  baseInput.value.setErrors(error);
};

defineExpose({ setErrors });
</script>

<template>
  <BaseInput
    ref="baseInput"
    :name="props.name ?? 'password'"
    :model-value="props.modelValue"
    :placeholder="attrs.placeholder ?? 'Password'"
    :type="activeInputType"
    :rules="props.rules"
    v-bind="attrs"
    @update:model-value="emits('update:model-value', $event)"
    @focus="emits('focus')"
    @blur="emits('blur')"
  >
    <template #prefix>
      <BaseIcon
        class="ml-[10px] fill-blue-400/20"
        name="secure"
      />
    </template>

    <template #postfix>
      <BaseIcon
        class="mr-5 fill-blue-400/20 cursor-pointer"
        :class="[isPasswordVisible ? 'fill-blue-400/60' : 'fill-blue-400/20']"
        name="eye-slash"
        @click="togglePasswordVisible"
      />
    </template>
  </BaseInput>
</template>

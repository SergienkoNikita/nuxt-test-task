<script setup lang="ts">
import { BaseButton, BaseForm } from '~/components/base';
import OtpInput from '~/components/common/otp-form/otp-input.vue';
import { computed, ref } from '#imports';

const OTP_LENGTH = 6;

interface Emits {
  (event: 'submit', value: string): void;
}

const emits = defineEmits<Emits>();

const otpValue = ref<string>('');

const isSubmitDisabled = computed<boolean>(() => otpValue.value.length < OTP_LENGTH);

const onSubmit = () => {
  emits('submit', otpValue.value);
};
</script>

<template>
  <BaseForm
    class="w-[484px] text-center"
    @submit="onSubmit"
  >
    <OtpInput
      v-model="otpValue"
      :count="OTP_LENGTH"
      class="mb-6"
    />

    <BaseButton
      type="submit"
      :disabled="isSubmitDisabled"
      class="max-w-[453px]"
      label="SUBMIT"
    />
  </BaseForm>
</template>

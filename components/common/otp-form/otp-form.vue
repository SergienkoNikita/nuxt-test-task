<script setup lang="ts">
import { BaseButton } from '~/components/base';
import OtpInput from '~/components/common/otp-form/otp-input.vue';
import { computed, ref } from '#imports';

const OTP_LENGTH = 6;

const otpValue = ref<string>('');

const isSubmitDisabled = computed<boolean>(() => otpValue.value.length < OTP_LENGTH);

</script>

<template>
  <div class="w-[484px] text-center">
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
  </div>
</template>

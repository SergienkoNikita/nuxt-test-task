<script setup lang="ts">
import { ref } from 'vue';
import { RegistrationForm, useAuthStore } from '~/stores/use-auth-store';
import {
  BaseForm, BaseInput, BaseIcon, BaseInputPassword, BaseCheckbox,
} from '~/components/base';
import BaseButton from '~/components/base/base-button/base-button.vue';
import { computed } from '#imports';

interface Emits {
  (event: 'submit', formData: RegistrationForm): void
}

const emits = defineEmits<Emits>();

const { registrationForm } = useAuthStore();
const passwordConfirm = ref<InstanceType<typeof BaseInputPassword>>();

const isConfirmPasswordValid = computed<boolean>(() => (
  passwordConfirm.value && registrationForm.passwordRepeat === registrationForm.password
));

const onSubmitRegistrationForm = (formData: RegistrationForm) => {
  emits('submit', formData);
};

const validatePasswordConfirmation = (): void => {
  if (isConfirmPasswordValid.value) return;

  passwordConfirm.value.setErrors('Password mismatch');
};

</script>

<template>
  <BaseForm
    v-slot="{ meta }"
    @submit="onSubmitRegistrationForm"
  >
    <BaseInput
      v-model="registrationForm.name"
      name="name"
      placeholder="Username"
      rules="required|alpha"
      type="text"
      autocomplete="name"
      class="mb-[10px]"
    >
      <template #prefix>
        <BaseIcon
          name="person"
          class="ml-[10px] fill-blue-400/20"
        />
      </template>
    </BaseInput>
    <BaseInput
      v-model="registrationForm.username"
      name="username"
      type="text"
      autocomplete="email"
      placeholder="Email"
      rules="required|alpha_num"
      class="mb-[10px]"
    >
      <template #prefix>
        <BaseIcon
          class="ml-[10px] fill-blue-400/20"
          name="mail"
        />
      </template>
    </BaseInput>

    <BaseInputPassword
      v-model="registrationForm.password"
      rules="required|password"
      class="mb-[10px]"
    />

    <BaseInputPassword
      ref="passwordConfirm"
      v-model.trim="registrationForm.passwordRepeat"
      name="password-repeat"
      placeholder="Confirm Password"
      rules="required|password"
      class="mb-[14px]"
      @blur="validatePasswordConfirmation"
    />

    <BaseCheckbox
      v-model="registrationForm.acceptPolitics"
      name="accept-politics"
      class="w-full text-left"
      rules="required"
    >
      <span class="text-sm-medium tracking-wide">
        Accept <a
          class="text-sm-normal text-blue-200"
          href="#"
        >terms and conditions</a>
      </span>
    </BaseCheckbox>

    <BaseButton
      class="mt-[25px]"
      :disabled="!meta.valid || !isConfirmPasswordValid"
      label="SIGN UP"
    />
  </BaseForm>
</template>

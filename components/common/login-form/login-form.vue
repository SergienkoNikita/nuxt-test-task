<script setup lang="ts">
import {
  BaseForm, BaseInput, BaseIcon, BaseInputPassword, BaseButton,
} from '~/components/base';
import { LoginForm, useAuthStore } from '~/stores/use-auth-store';

interface Emits {
  (event: 'submit', form: LoginForm): void;
}

const { loginForm } = useAuthStore();

const emits = defineEmits<Emits>();

const onSubmitLoginForm = (formData: LoginForm) => {
  emits('submit', formData);
};
</script>
<!--Было-бы не плохо добавить валидацию на email, но апи не позволяет,
    подробности в ~/stores/use-auth-store.ts-->
<template>
  <BaseForm
    v-slot="{ meta }"
    @submit="onSubmitLoginForm"
  >
    <BaseInput
      v-model="loginForm.username"
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
      v-model="loginForm.password"
      rules="required|password"
      class="mb-[25px]"
    />

    <BaseButton
      type="submit"
      label="SIGN UP"
      :disabled="!meta.valid"
    />
  </BaseForm>
</template>

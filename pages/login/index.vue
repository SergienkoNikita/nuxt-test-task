<script setup lang="ts">
import { definePageMeta, navigateTo } from '#imports';
import { useAuthStore } from '~/stores/use-auth-store';
import { LoginForm } from '~/components/common/login-form';

definePageMeta({
  layout: 'authorization',
});

const authStore = useAuthStore();

const onSubmit = async () => {
  try {
    await authStore.login(authStore.loginForm);
    navigateTo('/home');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
</script>

<template>
  <div class="w-[477px] flex flex-col items-center gap-[25px]">
    <h1>Login to your Account</h1>

    <div class="flex w-full items-center justify-between px-3">
      <hr class="w-[120px] bg-grey-400">

      <p class="text-xs-medium tracking-wide">
        with email
      </p>

      <hr class="w-[120px] bg-grey-400">
    </div>

    <div class="w-[453px] m-auto text-center">
      <LoginForm
        class="w-[453px]"
        @submit="onSubmit"
      />

      <p class="mt-4 text-xs-normal">
        <span>Don’t have account? </span>

        <NuxtLink
          class="text-blue-200 text-xs-medium"
          to="/registration"
        >
          Create an account
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

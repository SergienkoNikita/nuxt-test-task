<script setup lang="ts">
import { definePageMeta } from '#imports';
import { LoginForm } from '~/components/common/login-form';

definePageMeta({
  layout: 'authorization',
});
</script>

<template>
  <div class="w-[477px] flex flex-col items-center gap-[25px]">
    <h1>Login to your Account</h1>

    <div class="flex w-full items-center justify-between px-3">
      <hr class="w-[120px] bg-grey-400">

      <p class="text-xs-medium tracking-widest">
        with email
      </p>

      <hr class="w-[120px] bg-grey-400">
    </div>

    <div class="w-[453px] m-auto text-center">
      <LoginForm class="w-[453px]" />

      <p class="mt-4 text-xs-medium">
        <span>Don’t have account? </span>

        <NuxtLink
          class="text-blue-200 text-xs-bold"
          to="/registration"
        >
          Create an account
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

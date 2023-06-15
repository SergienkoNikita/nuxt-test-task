<script setup lang="ts">
import { definePageMeta } from '#imports';
import BaseButton from '~/components/base/base-button/base-button.vue';

definePageMeta({
  layout: 'authorization',
});

const onNavClick = (e) => {
  // eslint-disable-next-line no-console
  console.log(e);
};
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
    <div class="w-[453px] m-auto text-center text-xs-medium">
      <BaseButton
        label="sing up"
        disabled
      />
      <p class="mt-4">
        <span>Don’t have account? </span>
        <a
          class="text-blue-200 text-xs-bold"
          href="#"
          @click.prevent="onNavClick"
        >
          Create an account
        </a>
      </p>
    </div>
  </div>
</template>

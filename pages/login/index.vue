<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import { navigateTo } from '#app';
import { ClearFormModal } from '~/components/common/clear-form-modal';

definePageMeta({
  layout: 'authorization',
});

const isModalVisible = ref<boolean>(false);

const onLinkClick = (): void => {
  isModalVisible.value = true;
};

const onApplyClearForm = () => {
  navigateTo('/registration');
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
    <ClearFormModal
      v-model="isModalVisible"
      @apply="onApplyClearForm"
    />
    <div class="w-[453px] m-auto text-center text-xs-medium">
      <p class="mt-4">
        <span>Don’t have account? </span>
        <a
          class="text-blue-200 text-xs-bold"
          href="#"
          @click.prevent="onLinkClick"
        >
          Create an account
        </a>
      </p>
    </div>
  </div>
</template>

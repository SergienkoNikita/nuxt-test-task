<script setup lang="ts">
import { useAuthStore } from '~/stores/use-auth-store';

const authStore = useAuthStore();
</script>

<template>
  <div
    v-if="authStore.user"
    class="contents"
  >
    <h1 class="leading-[1.3em]">
      Hello - <span class="text-blue-400">@{{ authStore.user?.username }}</span>
    </h1>
    <p class="text-lg my-10">
      Yours data:
    </p>
    <ul>
      <li
        v-for="[fieldName, fieldValue] in Object.entries(authStore.user)"
        :key="fieldValue"
        class="flex gap-x-5 items-center mb-3 last-of-type:mb-0 max-w-full"
      >
        <p class="text-sm-bold text-blue-400 flex-[1_0_200px] max-w-[200px]">
          {{ fieldName }}:
        </p>
        <p class="text-md break-words truncate flex-grow">
          {{ fieldValue }}
        </p>
      </li>
    </ul>
  </div>
</template>

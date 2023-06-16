<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
  layout: 'authorization',
});
</script>

<template>
  <div class="">
    Регистрация
    <NuxtLink
      class="text-blue-200 text-xs-bold"
      to="/login"
    >
      to Логин
    </NuxtLink>
  </div>
</template>

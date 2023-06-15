<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
  layout: 'authorization',
});
</script>

<template>
  <div class="">
    Регистрация
    <NuxtLink to="/login">
      Логин
    </NuxtLink>
  </div>
</template>

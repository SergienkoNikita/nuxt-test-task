<script setup lang="ts">
import { RouteLocation } from 'vue-router';
import { useRoute } from '#app';
import BaseIcon from '~/components/base/base-icon/base-icon.vue';

const route = <RouteLocation>useRoute();
</script>

<template>
  <h1>Страница: {{ route.params.slug }}</h1>
  <div class="">
    <BaseIcon
      name="person"
      class="fill-blue-600"
    />
    <h1 class="p-2 text-lg">
      Hello World
    </h1>
  </div>
  <input type="text" placeholder="Username">
</template>

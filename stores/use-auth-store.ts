import { defineStore, ref } from '#imports';

export const useAuthStore = defineStore('auth', () => {
  const isAuthorized = ref<boolean>(false);

  return {
    isAuthorized,
  };
});

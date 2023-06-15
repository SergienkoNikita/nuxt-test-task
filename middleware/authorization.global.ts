import { RouteLocationNormalized } from 'vue-router';
import { defineNuxtRouteMiddleware, navigateTo, useNuxtApp } from '#imports';
import { NavigationFailure, RouteLocationRaw } from '#vue-router';
import { useAuthStore } from '~/stores/use-auth-store';

const UnauthorizedRoutes = ['login', 'registration', 'verify'];

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized)
: Promise<void | NavigationFailure | false> | false | void | RouteLocationRaw => {
  const app = useNuxtApp();

  if (app.$pinia) {
    const authStore = useAuthStore();

    if (authStore.isAuthorized) return;

    if (!to.path.split('/').some((path) => UnauthorizedRoutes.includes(path))) {
      // eslint-disable-next-line consistent-return
      return navigateTo('/login');
    }
  }
});

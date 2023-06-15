<script setup lang="ts">
import { useRoute } from '#app';

enum AuthRoute {
  Login = 'login',
  Registration = 'registration',
  Verify = 'verify',
}

type PageContent = {
  title: string,
  description: string,
  img?: string,
};

const pageData: Record<AuthRoute, PageContent> = {
  [AuthRoute.Login]: {
    title: 'Connect with any device.',
    description: 'Everything you need is an internet connection.',
  },
  [AuthRoute.Registration]: {
    title: 'Join us!',
    description: 'Just go through the boring process of creating an account.',
  },
  [AuthRoute.Verify]: {
    title: 'It\'s just OTP verification',
    description: 'You are one step away from recovering your password.',
  },
};

const route = useRoute();
const imgList = import.meta.glob('./img/**-layout.svg', { as: 'raw', eager: true });

const getPageContent = (): PageContent | null => {
  let currentAuthRoute: AuthRoute | null;

  switch (route.path.replace('/', '')) {
    case AuthRoute.Login:
      currentAuthRoute = AuthRoute.Login;
      break;
    case AuthRoute.Registration:
      currentAuthRoute = AuthRoute.Registration;
      break;
    case AuthRoute.Verify:
      currentAuthRoute = AuthRoute.Verify;
      break;
    default:
      currentAuthRoute = null;
      break;
  }

  if (!currentAuthRoute) return null;

  const currentPageData = pageData[currentAuthRoute];

  currentPageData.img = imgList[`./img/${currentAuthRoute}-layout.svg`] ?? '';

  return currentPageData;
};

const pageContent = getPageContent();
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="container min-h-[100vh] flex items-center">
    <div class="h-[1024px] w-full bg-white-additional rounded-lg flex overflow-hidden">
      <section class="w-1/2 flex items-center justify-center">
        <slot />
      </section>
      <section class="relative w-1/2 bg-blue-600 flex items-center justify-center">
        <div
          class="absolute
                    flex items-center justify-center
                    h-[606px] w-[606px] rounded-full gradient"
        >
          <div class="inner-gradient h-[528px] w-[528px] rounded-full" />
          <span
            v-if="pageContent?.img"
            class="absolute"
            v-html="pageContent.img"
          />
        </div>
        <div
          v-if="pageContent"
          class="self-end text-white text-center w-full mb-[108px]"
        >
          <h4>{{ pageContent.title }}</h4>
          <p class="text-sm-medium">
            {{ pageContent.description }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.gradient {
  background-image:
    linear-gradient(162.74deg, rgba(68, 76, 231, 0.162) 6.85%, rgba(0, 0, 0, 0) 89.34%),
    radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.162) 0%, rgba(68, 76, 231, 0.058) 100%);
}
.inner-gradient {
  background-image: linear-gradient(173.9deg, rgba(164, 188, 253, 0.2) 4.83%,
  rgba(68, 76, 231, 0.162) 91.13%),
  radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.162) 0%, rgba(68, 76, 231, 0.058) 100%);
}
</style>

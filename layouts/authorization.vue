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
  <div class="container min-h-[100vh] flex items-center">
    <div class="h-[1024px] w-full bg-white-additional rounded-lg flex overflow-hidden">
      <section class="w-1/2 flex items-center justify-center">
        <slot/>
      </section>
      <section class="w-1/2 bg-blue-600 relative flex items-center justify-center">
        <div class="gradient flex items-center justify-center">
          <div class="inner-gradient"></div>
          <span class="absolute" v-if="pageContent?.img" v-html="pageContent.img"/>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.gradient {
  height: 606px;
  width: 606px;
  border-radius: 999px;
  background: linear-gradient(162.74deg, rgba(68, 76, 231, 0.162) 6.85%, rgba(0, 0, 0, 0) 89.34%),
  radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.162) 0%, rgba(68, 76, 231, 0.058) 100%);
}
.inner-gradient {
  height: 528px;
  width: 528px;
  border-radius: 999px;
  background: linear-gradient(173.9deg, rgba(164, 188, 253, 0.2) 4.83%,
  rgba(68, 76, 231, 0.162) 91.13%),
  radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.162) 0%, rgba(68, 76, 231, 0.058) 100%);
}
</style>

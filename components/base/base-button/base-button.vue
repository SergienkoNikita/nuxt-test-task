<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
import { computed, useAttrs } from '#imports';
import { NuxtLink } from '#components';

enum ButtonType {
  Link = 'link',
  Button = 'button',
}

interface ButtonProps {
  type?: 'submit' | 'button' | 'reset';
}

interface LinkProps {
  to?: string | RouteLocationRaw;
  href?: string | RouteLocationRaw;
}

interface Props extends ButtonProps, LinkProps {
  label: string;
  disabled?: boolean;
}

interface Emits {
  (event: 'click'): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const attrs = useAttrs();

const buttonType = computed<ButtonType>(() => {
  if (props.href || props.to) return ButtonType.Link;

  return ButtonType.Button;
});

const currentButtonComponent = computed<NuxtLink | 'button'>(() => {
  if (buttonType.value === ButtonType.Link) return NuxtLink;

  return 'button';
});

const onButtonClick = (): void => {
  if (props.disabled) return;

  emits('click');
};
</script>

<template>
  <component
    v-bind="attrs"
    :is="currentButtonComponent"
    class="w-full text-white p-4 rounded-md transition-[all_0.2s_linear]"
    :class="[props.disabled
      ? 'bg-blue-200/60 cursor-not-allowed'
      : 'bg-blue-200 hover:bg-blue-200/80'
    ]"
    @click="onButtonClick"
  >
    <slot>{{ props.label }}</slot>
  </component>
</template>

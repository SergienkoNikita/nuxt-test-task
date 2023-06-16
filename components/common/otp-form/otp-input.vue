<script setup lang="ts">
import { ref, watch } from '#imports';
import { BaseInput } from '~/components/base';

const AVAILABLE_KEYPRESS_CODES = {
  left: 'ArrowLeft',
  right: 'ArrowRight',
  backspace: 'Backspace',
} as const;

const props = withDefaults(defineProps<{
  count?: number,
  modelValue: string,
}>(), {
  count: 6,
});

interface Emits {
  (event: 'update:model-value', value: string)
}

const emits = defineEmits<Emits>();

const localValue = ref<string[]>(new Array(props.count).fill(''));
const refs = ref<Map<number, InstanceType<BaseInput>>>(new Map());
const setRefs = (el: InstanceType<BaseInput>, id: number): void => {
  refs.value.set(id, el);
};

const onInputChange = (index: number, value: string): void => {
  if (typeof localValue.value.at(index) !== 'string' || index > localValue.value.length - 1) return;

  localValue.value[index] = value[value.length - 1] ?? '';
  if (value) {
    refs.value.get(index + 1)?.focus();
  } else {
    refs.value.get(index - 1)?.focus();
  }
};

const onInput = (event: InputEvent): void => {
  // eslint-disable-next-line no-param-reassign
  event.target.value = event.target.value[event.target.value.length - 1] ?? '';
};

const onKeyPress = (e: KeyboardEvent, index): void => {
  if (!Object.values(AVAILABLE_KEYPRESS_CODES).includes(e.code)) return;

  if (e.code === AVAILABLE_KEYPRESS_CODES.right) {
    e.preventDefault();
    refs.value.get(index + 1)?.focus();
    return;
  }

  if (AVAILABLE_KEYPRESS_CODES.left === e.code) {
    e.preventDefault();
    refs.value.get(index - 1)?.focus();
    return;
  }

  const currentInputValue = localValue.value.at(index);

  if (AVAILABLE_KEYPRESS_CODES.backspace === e.code && !currentInputValue) {
    e.preventDefault();
    refs.value.get(index - 1)?.focus();
  }
};

const onPaste = (e: ClipboardEvent) => {
  const pasteValue = e.clipboardData.getData('text/plain')
    .replace(/[^0-9A-Z]/gi, '')
    .slice(0, props.count)
    .split('');
  localValue.value = [...pasteValue, ...(new Array(props.count).fill('').slice(pasteValue.length))];
  refs.value.get(pasteValue.length === props.count ? props.count - 1 : pasteValue.length)?.focus();
};

watch(
  localValue.value,
  () => {
    emits('update:model-value', localValue.value.join(''));
  },
);
</script>

<template>
  <div class="flex gap-x-5">
    <template
      v-for="(input, index) in localValue"
      :key="`otp-letter-${index}`"
    >
      <BaseInput
        :ref="(el) => {
          if (el) setRefs(el, index)
        }"
        :model-value="input"
        :name="`otp-letter-${index}`"
        native-control-class="text-[32px] text-center uppercase"
        placeholder="-"
        @paste.prevent="onPaste"
        @update:model-value="onInputChange(index, $event)"
        @input="onInput"
        @keydown="onKeyPress($event, index)"
      />
    </template>
  </div>
</template>

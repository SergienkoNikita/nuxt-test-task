import { defineRule } from 'vee-validate';
import {
  alpha,
  email,
  length,
  required,
  integer,
} from '@vee-validate/rules';
import { defineNuxtPlugin } from '#imports';

export default defineNuxtPlugin(() => {
  defineRule('required', required);
  defineRule('alpha', alpha);
  defineRule('email', email);
  defineRule('integer', integer);
  defineRule('length', length);
  defineRule<string>('password', (value: string) => {
    if (value.replace(/\w|!|@|\$|,|#|%|&|'|\*|\+|-|\/|=|\?|\^|_|`|\{|}|\||~/ig, '').length) {
      return "Available symbols A → Z; a → z; 0-9;  @,!#$%&\\'*+-/=?^_` {|}~";
    }

    return true;
  });
});

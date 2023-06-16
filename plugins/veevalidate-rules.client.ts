import { defineRule } from 'vee-validate';
import {
  alpha,
  email,
  length,
  required,
  integer,
  confirmed,
} from '@vee-validate/rules';
import { defineNuxtPlugin } from '#imports';

export default defineNuxtPlugin(() => {
  defineRule(
    'required',
    (value: unknown, _params, ctx) => (
      required(value) || `Filed ${ctx.name} is required`
    ),
  );
  defineRule('alpha', alpha);
  defineRule('email', email);
  defineRule('integer', integer);
  defineRule('length', length);
  defineRule('confirmed', confirmed);
  defineRule<string>('password', (value: string) => {
    if (value.replace(/\w|!|@|\$|,|#|%|&|'|\*|\+|-|\/|=|\?|\^|_|`|\{|}|\||~/ig, '').length) {
      return "Available symbols A → Z; a → z; 0-9;  @,!#$%&\\'*+-/=?^_` {|}~";
    }

    return true;
  });
});

import { RuleExpression } from 'vee-validate';

export interface BaseInputProps {
  modelValue: string;
  name: string;
  nativeControlClass?: string | string[] | Record<string, boolean>
  rules?: RuleExpression<BaseInputProps['modelValue']>;
}

export interface BaseInputEmits {
  (event: 'update:model-value', value: BaseInputProps['modelValue']): void;
  (event: 'input', value: InputEvent): void;
  (event: 'focus'): void;
  (event: 'blur'): void;
}

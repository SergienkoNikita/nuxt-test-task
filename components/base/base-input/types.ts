import { RuleExpression } from 'vee-validate';

export interface BaseInputProps {
  modelValue: string;
  name: string;
  rules?: RuleExpression<BaseInputProps['modelValue']>;
}

export interface BaseInputEmits {
  (event: 'update:model-value', value: BaseInputProps['modelValue']): void;
  (event: 'focus'): void;
  (event: 'blur'): void;
}

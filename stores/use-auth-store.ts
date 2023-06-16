import { defineStore, ref } from '#imports';

export interface LoginForm {
  email: string,
  password: string;
}

export interface RegistrationForm extends LoginForm {
  passwordRepeat: string;
  userName: string;
  acceptPolitics: boolean;
}

const getDefaultLoginForm = (): LoginForm => ({
  email: '',
  password: '',
});

const getDefaultRegistrationForm = (): RegistrationForm => ({
  userName: 'Nikita',
  email: 'asd@as.vd',
  password: '123456',
  passwordRepeat: '123456',
  acceptPolitics: true,
});

export const useAuthStore = defineStore('auth', () => {
  const isAuthorized = ref<boolean>(false);

  const loginForm = ref<LoginForm>(getDefaultLoginForm());
  const registrationForm = ref<RegistrationForm>(getDefaultRegistrationForm());

  const clearLoginForm = (): void => {
    loginForm.value = getDefaultLoginForm();
  };

  const clearRegistrationForm = (): void => {
    registrationForm.value = getDefaultRegistrationForm();
  };

  return {
    isAuthorized,
    loginForm,
    registrationForm,
    clearLoginForm,
    clearRegistrationForm,
  };
});

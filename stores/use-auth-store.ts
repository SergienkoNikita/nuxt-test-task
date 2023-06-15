import { defineStore, ref } from '#imports';

interface LoginForm {
  email: string,
  password: string;
}

interface RegistrationForm extends LoginForm {
  passwordRepeat: string;
  userName: string;
}

const getDefaultLoginForm = (): LoginForm => ({
  email: '',
  password: '',
});

const getDefaultRegistrationForm = (): RegistrationForm => ({
  userName: '',
  email: '',
  password: '',
  passwordRepeat: '',
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

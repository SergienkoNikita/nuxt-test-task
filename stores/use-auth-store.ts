import { computed, defineStore, ref } from '#imports';
import { authApi } from '~/server/api/auth';

export interface LoginForm {
  username: string,
  password: string;
}

export interface RegistrationForm extends LoginForm {
  passwordRepeat: string;
  name: string;
  acceptPolitics: boolean;
}
export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  gender: string;
  image: string;
  lastName: string;
  token: string;
}

const getDefaultLoginForm = (): LoginForm => ({
  /* Так как апишка - https://dummyjson.com/docs/auth ожидает поле username (не email), имя поля было изменено
   (и в регистарции тоже🙃)
   данные для входа в доке по ссылке
   - username: `kminchelle`
   - password: `0lelplR`
   */
  username: '',
  password: '',
});

const getDefaultRegistrationForm = (): RegistrationForm => ({
  name: '',
  username: '',
  password: '',
  passwordRepeat: '',
  acceptPolitics: false,
});

export const useAuthStore = defineStore('auth', () => {
  const loginForm = ref<LoginForm>(getDefaultLoginForm());
  const registrationForm = ref<RegistrationForm>(getDefaultRegistrationForm());
  const user = ref<User | null>(null);

  const isAuthorized = computed<boolean>(() => Boolean(user.value));

  const clearLoginForm = (): void => {
    loginForm.value = getDefaultLoginForm();
  };

  const clearRegistrationForm = (): void => {
    registrationForm.value = getDefaultRegistrationForm();
  };

  const clearForms = () => {
    clearLoginForm();
    clearRegistrationForm();
  };

  const login = async (form: LoginForm) => {
    // eslint-disable-next-line no-useless-catch
    try {
      user.value = await authApi.login(form);
      clearForms();
    } catch (error) {
      throw error;
    }
  };

  return {
    isAuthorized,
    loginForm,
    registrationForm,
    user,

    clearLoginForm,
    clearRegistrationForm,
    login,
  };
});

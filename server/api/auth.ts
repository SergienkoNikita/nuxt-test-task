import { ofetch } from 'ofetch';
import { LoginForm, User } from '~/stores/use-auth-store';

interface AutApi {
  login(payload: LoginForm): Promise<User>
}

export const authApi: AutApi = {
  login: (data) => ofetch<User>(
    'https://dummyjson.com/auth/login',
    {
      method: 'POST',
      parseResponse: JSON.parse,
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ),
};

import { observable } from '@legendapp/state';
import { synced } from '@legendapp/state/sync';
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv';
import { pb } from '~/lib/pb';
import * as services from '../services';
import { UserModel } from '~/services/auth';

//const callbackUrl = Linking.createURL('/', { scheme: 'svg-quiz' });

export interface AuthStore {
  user?: UserModel;
  logout: () => void;
  loginWithGoogle: () => void;
}

export const authStore$ = observable<AuthStore>(() => ({
  user: () =>
    synced({
      persist: {
        name: 'auth',
        plugin: ObservablePersistMMKV,
      },
    }),
  loginWithGoogle: async () => {
    let result = await services.auth.loginWithGoogle();
    console.log('google auth result ', result);

    let user = await services.auth.updateUser(result.record.id, {
      avatarURL: result.meta?.avatarURL,
      name: result.meta?.name,
    });

    authStore$.user.set(user as UserModel);
  },

  logout() {
    pb.authStore.clear();
    authStore$.user.set(undefined);
  },
}));

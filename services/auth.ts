import * as WebBrowser from 'expo-web-browser';
import { AuthModel } from 'pocketbase';
import { pb } from '~/lib/pb';

export type UserModel = AuthModel & {
  id: string;
  name: string;
  avatarURL: string;
};

export const loginWithGoogle = () => {
  return pb.collection('users').authWithOAuth2({
    provider: 'google',
    urlCallback(url) {
      console.log('url callback ', url);
      WebBrowser.openBrowserAsync(url);
    },
  });
};

export const updateUser = (userId: string, model: Partial<UserModel>) => {
  return pb.collection('users').update(userId, { avatarURL: model.avatarURL, name: model.name });
};

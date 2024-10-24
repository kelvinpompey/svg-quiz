import { SafeAreaView, View } from 'react-native';

import { observer, Reactive, Show, Switch } from '@legendapp/state/react';

import { useStore } from '~/store';

import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { useRouter } from 'expo-router';
import { AntDesign } from 'expo-vector-icons';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

function Login() {
  const { authStore$ } = useStore();
  const router = useRouter();

  let user = authStore$.user.get();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        WebBrowser.dismissBrowser();
        WebBrowser.maybeCompleteAuthSession();
        router.dismiss();
      }, 500);
    }
  }, [user]);

  return (
    <SafeAreaView className=" relative flex flex-1 items-center justify-center bg-[#0066cc] px-4">
      <Button onPress={() => authStore$.loginWithGoogle()} className="flex-row gap-2 bg-[#009933]">
        <AntDesign name="google" size={24} color="white" />
        <Text>Login With Google</Text>
      </Button>
    </SafeAreaView>
  );
}

export default observer(Login);

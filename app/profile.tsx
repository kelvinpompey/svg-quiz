import { SafeAreaView, View } from 'react-native';

import { observer } from '@legendapp/state/react';

import { useStore } from '~/store';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { LogOut } from 'lucide-react-native';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { Header } from '~/components/Header';

function Login() {
  const { authStore$ } = useStore();

  let user = authStore$.user.get();

  return (
    <SafeAreaView className=" relative flex flex-1 bg-[#0066cc] px-4">
      <Header />
      <Card className="border-0 bg-transparent">
        <CardHeader className="">
          <Text className="text-white">{user?.name}</Text>
        </CardHeader>
        <CardContent></CardContent>
      </Card>

      <Button
        onPress={() => authStore$.logout()}
        className="w-[200px] flex-row gap-2 self-center bg-[#009933]">
        <LogOut color={'white'} />
        <Text className="font-bold">Logout</Text>
      </Button>
    </SafeAreaView>
  );
}

export default observer(Login);

import { View, SafeAreaView } from 'react-native';

import { useStore } from '~/store';
import { Header } from '~/components/Header';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import * as Updates from 'expo-updates';
import { observer } from 'mobx-react-lite';

function Home() {
  const router = useRouter();
  const { rootStore } = useStore();

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  const handleViewResults = () => {
    router.push('/results');
  };

  return (
    <SafeAreaView className="native:pt-8 relative flex flex-1 dark:bg-gray-900">
      <Header />
      <View className="flex flex-1 items-center gap-6">
        <View className="gap-8 rounded-md bg-gray-200 p-8 dark:bg-gray-800">
          <Text className="w-[300px] text-center text-2xl">
            The purpose of this app is to help students prepare for Caribbean exit examinations with
            short quizzes!
          </Text>

          <Text className="w-[300px] text-center text-xl">
            To start select the examination level
          </Text>

          <View className="grid w-[300px] grid-cols-3 gap-2">
            <Button className="bg-[#EAB308]" onPress={() => router.push('/subjects/cpea')}>
              <Text className="font-bold text-white">CPEA</Text>
            </Button>

            <Button className="bg-[#EAB308]" onPress={() => router.push('/subjects/csec')}>
              <Text className="font-bold text-white">CSEC</Text>
            </Button>

            <Button className="bg-[#EAB308]" onPress={() => router.push('/subjects/cape')}>
              <Text className="font-bold text-white">CAPE</Text>
            </Button>
          </View>
        </View>

        <Button onPress={handleViewResults}>
          <Text>View Quiz Results</Text>
        </Button>

        {/*<Text className="">Version {Constants.manifest2?.extra?.expoClient?.version}</Text> */}
      </View>
    </SafeAreaView>
  );
}

export default observer(Home);

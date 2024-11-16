import { View, SafeAreaView } from 'react-native';

import { observer } from '@legendapp/state/react';

import { useStore } from '~/store';
import { Header } from '~/components/Header';

import { Text } from '~/components/ui/text';
import Constants from 'expo-constants';
import { Link, useLocalSearchParams } from 'expo-router';
import { Button } from '~/components/ui/button';
import { useEffect } from 'react';

function Subjects() {
  const params = useLocalSearchParams<{ name: string }>();
  const { subjectStore$ } = useStore();

  useEffect(() => {
    subjectStore$.level.set(params.name.toUpperCase());
  }, []);

  console.log(
    'subjects ',
    subjectStore$.subjects.get().map((item) => item.name)
  );

  return (
    <SafeAreaView className="relative flex flex-1 bg-[#0066cc]">
      <Header />
      <View className="flex flex-1 items-center justify-center gap-6">
        <Text className="font-bold color-white">{params.name.toUpperCase()}</Text>
        <View className="grid grid-cols-3 gap-2">
          {subjectStore$.subjects.get().map((item) => (
            <Button key={item.id} className="bg-[#009933]">
              <Link href={'/quiz/' + item.id}>
                <Text>{item.name}</Text>
              </Link>
            </Button>
          ))}
        </View>

        <Text className="text-white">
          Version {Constants.manifest2?.extra?.expoClient?.version}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default observer(Subjects);

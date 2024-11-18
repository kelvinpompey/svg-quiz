import { View, SafeAreaView, ScrollView, Pressable } from 'react-native';

import { observer } from '@legendapp/state/react';

import { useStore } from '~/store';
import { Header } from '~/components/Header';

import { Text } from '~/components/ui/text';
import Constants from 'expo-constants';
import { Href, useLocalSearchParams, useRouter } from 'expo-router';
import { Button } from '~/components/ui/button';
import { useEffect } from 'react';
import { syncSubjects } from '~/store/subjects';
import { Badge } from '~/components/ui/badge';

function Subjects() {
  const params = useLocalSearchParams<{ name: string }>();
  const level = params.name.toUpperCase();
  const { subjectStore$ } = useStore();
  const router = useRouter();

  useEffect(() => {
    subjectStore$.level.set(params.name.toUpperCase());

    syncSubjects({ level: params.name.toUpperCase() });
  }, []);

  return (
    <SafeAreaView className="relative flex flex-1 bg-[#0066cc]">
      <Header />
      <View className="flex flex-1 items-center justify-center gap-6">
        <Text className="font-bold color-white">{params.name.toUpperCase()}</Text>
        <Text className="text-white">
          The number indictes the number of unique questions available. This will increase over time
        </Text>
        <ScrollView>
          <View className="grid grid-cols-3 gap-2 p-4">
            {subjectStore$.subjectsByLevel(level)?.map((item) => (
              <Pressable
                key={item.id}
                className="min-w-full flex-row justify-between rounded-md bg-[#009933] p-2"
                onPress={() => router.push(`/quiz/${item.id}?name=${item.name}` as Href)}>
                <Text className="w-[200px] flex-1 flex-wrap text-white">{item.name}</Text>
                <View>
                  <Badge className="bg-yellow-500">
                    <Text className="text-white">{item.question_count}</Text>
                  </Badge>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        <Text className="text-white">
          Version {Constants.manifest2?.extra?.expoClient?.version}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default observer(Subjects);

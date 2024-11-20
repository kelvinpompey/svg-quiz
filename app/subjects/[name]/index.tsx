import { View, SafeAreaView, ScrollView, Pressable, useWindowDimensions } from 'react-native';

import { observer, useObservable } from '@legendapp/state/react';

import { useStore } from '~/store';
import { Header } from '~/components/Header';

import { Text } from '~/components/ui/text';
import Constants from 'expo-constants';
import { Href, useLocalSearchParams, useRouter } from 'expo-router';
import { Button } from '~/components/ui/button';
import { useEffect } from 'react';
import { syncSubjects } from '~/store/subjects';
import { Badge } from '~/components/ui/badge';
import { Scroll } from 'lucide-react-native';
import { Quiz } from '~/components/Quiz';
import { SubjectModel } from '~/services/subjects';
import { questionStore$ } from '~/store/question';

function Subjects() {
  const params = useLocalSearchParams<{ name: string }>();
  const level = params.name.toUpperCase();
  const { subjectStore$ } = useStore();
  const router = useRouter();
  const dimensions = useWindowDimensions();
  const isSmall = dimensions.width < 900;

  const selectedSubject$ = useObservable<SubjectModel>();

  console.log('selectedSubject ', selectedSubject$.get());

  useEffect(() => {
    console.log(' name ', params.name);
    subjectStore$.level.set(params.name.toUpperCase());

    syncSubjects({ level: params.name.toUpperCase() });
  }, []);

  const renderSmall = () => {
    return (
      <View className="flex flex-1 items-center justify-center gap-6">
        <Text className="font-bold">{params.name.toUpperCase()}</Text>
        <Text className="">
          The number indictes the number of unique questions available. This will increase over time
        </Text>
        <ScrollView>
          <View className="grid grid-cols-3 gap-2 rounded-md bg-gray-200 p-4 dark:bg-gray-800">
            {subjectStore$.subjectsByLevel(level)?.map((item) => (
              <Pressable
                key={item.id}
                className="min-w-full flex-row justify-between rounded-md p-2"
                onPress={() => router.push(`/quiz/${item.id}?name=${item.name}` as Href)}>
                <Text className=" w-[200px] flex-1 flex-wrap text-xl">{item.name}</Text>
                <View>
                  <Badge className="bg-yellow-500">
                    <Text className="text-xl text-white">{item.question_count}</Text>
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
    );
  };

  const renderLarge = () => {
    return (
      <View className="flex-1 gap-6">
        <View className="flex-1 flex-row gap-2 rounded-md bg-gray-200 dark:bg-gray-900">
          <View>
            <ScrollView className="h-full p-4 dark:bg-gray-800">
              {subjectStore$.subjectsByLevel(level)?.map((item) => (
                <Pressable
                  key={item.id}
                  className=" flex-row rounded-md p-2"
                  onPress={() => handleSelectSubject(item)}>
                  <Text className=" w-[200px] flex-wrap text-xl">{item.name}</Text>
                  <View>
                    <Badge className="bg-yellow-500">
                      <Text className="text-xl text-white">{item.question_count}</Text>
                    </Badge>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          <View className="flex-1">
            {Boolean(selectedSubject$.get()) && (
              <Quiz
                name={selectedSubject$.name.get()!}
                subject={selectedSubject$.id.get()!}
                showHeader={false}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

  const handleSelectSubject = (item: SubjectModel) => {
    selectedSubject$.set(item);
  };

  return (
    <SafeAreaView className="native:pt-8 relative flex flex-1 dark:bg-gray-900">
      <Header />

      {isSmall ? renderSmall() : renderLarge()}
    </SafeAreaView>
  );
}

export default observer(Subjects);

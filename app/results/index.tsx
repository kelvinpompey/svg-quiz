import {
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  FlatList,
  StyleSheet,
} from 'react-native';

import { useStore } from '~/store';
import { Header } from '~/components/Header';

import { Text } from '~/components/ui/text';
import { observer } from 'mobx-react-lite';
import { generateRandomString } from '~/lib/random';
import { toJS } from 'mobx';
import { SubjectModel } from '~/services/subjects';
import { cn } from '~/lib/utils';

const data = [
  {
    time: 49,
    date: '2024-11-21T16:33:24.766Z',
    subject: {
      collectionId: '_pbc_1702338593',
      collectionName: 'subjects_totals',
      id: '31g49n6kc706131',
      level: 'CPEA',
      name: 'Social Studies',
      question_count: 52,
    },
  },
  {
    time: 49,
    date: '2024-11-21T16:36:52.782Z',
    subject: {
      collectionId: '_pbc_1702338593',
      collectionName: 'subjects_totals',
      id: '31g49n6kc706131',
      level: 'CPEA',
      name: 'Social Studies',
      question_count: 52,
    },
  },
];

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function Results() {
  const {
    rootStore: { quizStore },
  } = useStore();

  const dimensions = useWindowDimensions();
  const isSmall = dimensions.width < 900;

  console.log('quiz results2 ', toJS(quizStore.results));

  const renderSmallQuizItem = ({ item, index }: { item: SubjectModel; index: number }) => (
    <View
      className={cn(
        'flex-1 flex-col px-4 py-1',
        index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-900'
      )}>
      <View className="flex-row">
        <Text className="w-[80px]">Date</Text>
        <Text className="w-[200px]">{new Date(item?.date).toDateString()}</Text>
      </View>

      <View className="flex-row">
        <Text className="w-[80px]">Level</Text>
        <Text className="w-[200px]">{item.subject?.level}</Text>
      </View>

      <View className="flex-row">
        <Text className="w-[80px]">Subject</Text>
        <Text className="w-[200px]">{item.subject?.name}</Text>
      </View>

      <View className="flex-row">
        <Text className="w-[80px]">Time</Text>
        <Text className="w-[200px]">{item.time}</Text>
      </View>
    </View>
  );

  const renderLargeQuizItem = ({ item, index }: { item: SubjectModel; index: number }) => (
    <View
      className={cn(
        'flex-row px-4 py-1',
        index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'
      )}>
      <Text className="w-[180px]" key={generateRandomString(16)}>
        {new Date(item?.date).toDateString()}
      </Text>
      <Text className="w-[100px]">{item.subject?.level}</Text>
      <Text className="w-[200px]">{item.subject?.name} </Text>
      <Text className="w-[200px]">{item.time}</Text>
    </View>
  );

  const renderLarge = () => {
    return (
      <SafeAreaView className="native:pt-8 relative flex flex-1 dark:bg-gray-900 ">
        <Header />

        <View className="flex-row justify-center">
          <View className="gap-4 p-2">
            <Text className="text-2xl font-bold">Quiz Results</Text>
            <View className="rounded-md bg-gray-200 p-2 dark:bg-gray-800">
              <View className="flex-row px-4 py-2">
                <Text className="w-[180px] font-bold">Date</Text>
                <Text className="w-[100px] font-bold">Level</Text>
                <Text className="w-[200px] font-bold">Subject</Text>
                <Text className="w-[200px] font-bold">Time</Text>
              </View>
              <FlatList
                className="flex"
                data={quizStore.results as SubjectModel[]}
                keyExtractor={(item, index) => `${index}`}
                renderItem={renderLargeQuizItem}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  const renderSmall = () => {
    return (
      <SafeAreaView className="native:pt-8 relative flex flex-1 dark:bg-gray-900 ">
        <Header />

        <View className="flex-row">
          <View className="flex-1 gap-4 p-4">
            <Text className="text-2xl font-bold">Quiz Results</Text>
            <View className="rounded-md bg-gray-200 p-2 dark:bg-gray-800">
              <FlatList
                className="flex"
                data={quizStore.results}
                keyExtractor={(item, index) => `quiz-item-${index}`}
                renderItem={renderSmallQuizItem}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return isSmall ? renderSmall() : renderLarge();
}

export default observer(Results);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

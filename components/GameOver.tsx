import { View } from 'react-native';
import { Text } from './ui/text';
import { useStore } from '~/store';
import { observer } from '@legendapp/state/react';
import { Link, useRouter } from 'expo-router';
import { Button } from './ui/button';

export const GameOver = observer(() => {
  const {
    rootStore: { timerStore, questionStore },
  } = useStore();

  const router = useRouter();

  const viewQuizResults = () => {
    router.push('/results');
  };

  return (
    <View className="gap-4 p-2">
      <Text className="text-2xl text-white">
        Quiz completed in {timerStore.count} seconds with {questionStore.correctAnswerPercent}%
        accuracy.
      </Text>
      <Button onPress={viewQuizResults}>
        <Text>View Quiz Results</Text>
      </Button>
    </View>
  );
});

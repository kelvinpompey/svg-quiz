import { View } from 'react-native';
import { Text } from './ui/text';
import { useStore } from '~/store';
import { observer } from '@legendapp/state/react';

export const GameOver = observer(() => {
  const {
    rootStore: { timerStore },
  } = useStore();
  return (
    <View className="p-2">
      <Text className="text-white">Quiz completed in {timerStore.count} seconds</Text>
    </View>
  );
});

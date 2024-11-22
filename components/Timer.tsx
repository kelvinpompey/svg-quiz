import { observer } from 'mobx-react-lite';
import { Text } from './ui/text';
import { useStore } from '~/store';
import { useCurrentRoute } from '~/lib/useCurrentRoute';

export const Timer = observer(() => {
  const {
    rootStore: { timerStore, questionStore },
  } = useStore();

  const currentRoute = useCurrentRoute();

  const routeConditions = currentRoute.includes('subject') || currentRoute.includes('quiz');

  if (questionStore.quizState !== 'started' || !routeConditions) return null;
  return <Text className="text-center text-xl font-bold">Time: {timerStore.count}</Text>;
});

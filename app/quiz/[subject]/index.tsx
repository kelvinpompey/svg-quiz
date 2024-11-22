import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { Header } from '~/components/Header';
import { Quiz } from '~/components/Quiz';

export default function QuizPage() {
  const params = useLocalSearchParams<{ subject: string; name: string }>();

  return (
    <SafeAreaView className="native:pt-8 relative flex flex-1 dark:bg-gray-900">
      <Header />
      <Quiz subject={params.subject} name={params.name} />
    </SafeAreaView>
  );
}

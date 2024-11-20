import { useLocalSearchParams } from 'expo-router';
import { Quiz } from '~/components/Quiz';

export default function QuizPage() {
  const params = useLocalSearchParams<{ subject: string; name: string }>();

  return <Quiz subject={params.subject} name={params.name} />;
}

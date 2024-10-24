import { observable, syncState } from '@legendapp/state';
import * as services from '../services';
import { synced } from '@legendapp/state/sync';
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv';

export const questionStore$ = observable(() => ({
  currentQuestionIndex: 0,
  answerState: 'pending',
  questions: () =>
    synced({
      get() {
        return services.questions.fetchQuestions();
      },
      persist: { name: 'questions', plugin: ObservablePersistMMKV },
    }),
  loadingState: () => syncState(questionStore$.questions),
  currentQuestion: () => questionStore$.questions.items[questionStore$.currentQuestionIndex.get()],
  checkAnswer: (answer: string) => {
    if (questionStore$.currentQuestion.expand.correct_option.id.get() === answer) {
      questionStore$.answerState.set('correct');

      setTimeout(questionStore$.nextQuestion, 1000);
    } else {
      questionStore$.answerState.set('wrong');
    }
  },
  nextQuestion: () => {
    questionStore$.currentQuestionIndex.set(
      (prev) => (prev + 1) % questionStore$.questions.totalItems.get()
    );
    questionStore$.answerState.set('pending');
  },
}));

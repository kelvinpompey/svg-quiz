import { observable, syncState } from '@legendapp/state';
import * as services from '../services';

export const questionStore$ = observable(() => ({
  currentQuestionIndex: 0,
  answerState: 'pending',
  questions: () => services.questions.fetchQuestions(),
  loadingState: () => syncState(questionStore$.questions),
  currentQuestion: () => questionStore$.questions.items[questionStore$.currentQuestionIndex.get()],
  checkAnswer: (answer: string) => {
    if (questionStore$.currentQuestion.expand.correct_option.id.get() === answer) {
      questionStore$.answerState.set('correct');
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

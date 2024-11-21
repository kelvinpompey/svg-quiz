import { QuizStore } from './quiz';
import { QuestionStore } from './question';
import { SubjectStore } from './subjects';
import { TimerStore } from './timer';

export class RootStore {
  timerStore: TimerStore;
  subjectStore: SubjectStore;
  questionStore: QuestionStore;
  quizStore: QuizStore;

  constructor() {
    this.timerStore = new TimerStore(this);
    this.subjectStore = new SubjectStore(this);
    this.questionStore = new QuestionStore(this);
    this.quizStore = new QuizStore(this);
  }
}

export const rootStore = new RootStore();

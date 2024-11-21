import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './root';

type TimerInterface = {
  start: () => void;
  flip: () => void;
  stop: () => void;
};

type Timer = TimerInterface & {
  id?: NodeJS.Timeout | null;
  count: number;
  rootStore: RootStore;
};

export class TimerStore implements Timer {
  id: NodeJS.Timeout | null = null;
  count = 0;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    // Automatically binds actions and makes properties observable
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  start() {
    this.id = setInterval(() => {
      runInAction(() => {
        this.count += 1;
      });
    }, 1000);
  }

  flip() {
    if (this.id) {
      this.stop();
    } else {
      this.start();
    }
  }

  stop() {
    if (this.id) {
      clearInterval(this.id);
      this.id = null;
    }
  }
}

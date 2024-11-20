import { observable } from '@legendapp/state';

type TimerInterface = {
  start: () => void;
  flip: () => void;
  stop: () => void;
};

type Timer = TimerInterface & {
  id?: NodeJS.Timeout;
  count: number;
};

export const timerStore$ = observable<Timer>({
  count: 0,

  start: () => {
    const id = setInterval(() => {
      timerStore$.count.set((prev) => prev + 1);
    }, 1000);

    console.log('creating timer with id ', id);

    timerStore$.id.set(id);
  },

  flip: () => {
    if (timerStore$.id.get()) {
      timerStore$.stop();
    } else {
      timerStore$.start();
    }
  },

  stop: () => {
    if (timerStore$.id.get() !== null) {
      clearInterval(timerStore$.id.get() as NodeJS.Timeout);
      console.log('deleting timer with id ', timerStore$.id.get());
      timerStore$.id.set(null);
    }
  },
});

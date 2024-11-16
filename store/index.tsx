import { createContext, ReactNode, useContext } from 'react';
import { authStore$ } from './auth';
import { questionStore$ } from './question';
import { timerStore$ } from './timer';
import { subjectStore$ } from './subjects';

// Define the type for your store context
interface StoreContextType {
  authStore$: typeof authStore$;
  questionStore$: typeof questionStore$;
  subjectStore$: typeof subjectStore$;
  timerStore$: typeof timerStore$;
}
const StoreContext = createContext<StoreContextType>({
  subjectStore$,
  authStore$,
  questionStore$,
  timerStore$,
});

// Create the provider component
export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={{ authStore$, questionStore$, timerStore$, subjectStore$ }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};

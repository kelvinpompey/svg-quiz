import { createContext, ReactNode, useContext } from 'react';
import { authStore$ } from './auth';
import { questionStore$ } from './question';
import { timerStore$ } from './timer';

// Define the type for your store context
interface StoreContextType {
  authStore$: typeof authStore$;
  questionStore$: typeof questionStore$;
  timerStore$: typeof timerStore$;
}
const StoreContext = createContext<StoreContextType>({
  authStore$,
  questionStore$,
  timerStore$,
});

// Create the provider component
export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={{ authStore$, questionStore$, timerStore$ }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};

import { createContext, ReactNode, useContext } from 'react';
import { rootStore, RootStore } from './root';

// Define the type for your store context
interface StoreContextType {
  rootStore: RootStore;
}
const StoreContext = createContext<StoreContextType>({
  rootStore,
});

// Create the provider component
export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <StoreContext.Provider value={{ rootStore }}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  return useContext(StoreContext);
};

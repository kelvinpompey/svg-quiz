import { useSegments } from 'expo-router';

export const useCurrentRoute = () => {
  const segments = useSegments();
  const currentRoute = `/${segments.join('/')}`;

  return currentRoute;
};

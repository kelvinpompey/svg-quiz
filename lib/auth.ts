import { createAuthClient } from 'better-auth/dist/react'; // make sure to import from better-auth/react
import * as config from '../config';

export const authClient = createAuthClient({
  //you can pass client configuration here
  baseURL: config.API_URL,
});

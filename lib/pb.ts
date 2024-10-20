import PocketBase from 'pocketbase';
import { API_URL } from '~/config';
export const pb = new PocketBase(API_URL);
//export const pb = new PocketBase('http://192.168.0.4:8090');
//export const pb = new PocketBase('http://5.161.186.45:8090');

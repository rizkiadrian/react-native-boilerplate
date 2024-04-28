import {API_REDUCER_PATH_PREFIX} from 'src/configs/key-configs';

/**
 * @param length - number of length of final id
 * @returns id resulted random value based on length
 */
export const makeid = (length: number): string => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

/**
 * Make reducer path from config and additional key
 * @param key - key string specific API service
 * @returns result of string combined with reducer path
 */
export const makeReducerPath = (key: string): string => {
  return `${API_REDUCER_PATH_PREFIX}${key}`;
};

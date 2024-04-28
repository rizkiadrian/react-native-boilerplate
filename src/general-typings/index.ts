/**
 * Children type passed on dynamic children
 */
export type TChilden = React.ReactNode;

/**
 * Meta Interface based on API contract
 */
export interface IMeta {
  message?: string;
  status?: string;
  code?: number;
}

/**
 * Data result interface based on API contract
 */
export interface IData<T> {
  result: T;
}

/**
 * Response type will be based on API contract
 */
export interface IApiResonse<T> {
  meta: IMeta;
  data: IData<T>;
}

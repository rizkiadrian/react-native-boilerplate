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

/**
 * API / Data typing
 */
export interface ICategory {
  name: string;
  id: string;
}

/**
 * Place / Product item typing
 */
export interface IProduct {
  id: string;
  name: string;
  rating: number | string;
  is_favorite: boolean;
  img_url: string;
}

/**
 * Query params for get place
 */
export interface IPlaceQuery {
  category_id: number | string;
}

/**
 * Homepage Redux - Set active category payload
 */
export interface IActCategory {
  activeCategory: string;
}

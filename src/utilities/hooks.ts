import {useRef, useEffect, DependencyList} from 'react';

/**
 * @function
 * @name useDidUpdateEffect
 * @description A hook that calls function on component update or inputs change phase
 * @param fn
 * @param inputs
 */
export function useDidUpdateEffect(
  fn: () => void,
  inputs: DependencyList,
): boolean {
  const didMountRef = useRef<boolean>(false);

  useEffect(() => {
    if (didMountRef.current) {
      fn();
    } else {
      didMountRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- inputs should be array
  }, inputs);

  return true;
}

/**
 * @function
 * @name useDidMountEffect
 * @description A hook that calls function on component mount lifecycle
 * @param callback
 */
export function useDidMountEffect(callback: () => boolean): void {
  const executed = useRef<boolean>(false);
  useEffect(() => {
    if (!executed.current) {
      executed.current = callback();
    }
  }, [callback]);
}

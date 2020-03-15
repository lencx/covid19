/**
 * useCovid
 * @author: lencx
 * @create_at: Mar 15, 2020
 */

import { useEffect } from 'react';
import useStore from '~/hooks/useStore';

export type ServiceStatus = 'loading' | 'loaded' | 'error';

export interface Service<T> {
  payload: T;
  status: ServiceStatus;
  error?: Error;
}

export default function useCovid<T>(url: string): Service<T> {
  const { state, set } = useStore({
    status: 'loading',
    payload: null,
  });

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(res => set({ payload: res, status: 'loaded' }))
        .catch(error => set({ status: 'error', error }));
    }
  }, []);

  return state;
}

import { useCallback } from 'react';
import { useStore } from './store';
import { logOut } from '../data/admData';

export const useAuth = () => {
  const [store, setStore] = useStore();

  const login = useCallback((auth) => setStore((prev) => ({ ...prev, auth })), []);
  const logout = useCallback(() => { logOut(); return setStore(({ auth, ...prev }) => prev), []; });

  return [store && store.auth, { login, logout }];
};

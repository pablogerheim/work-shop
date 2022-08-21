import * as React from 'react';
import {
  createContext, useContext, useState, useEffect,
} from 'react';

const StoreContext = createContext([{}, () => { }]);

export const useStore = () => {
  const [state, setState] = useContext(StoreContext);
  return [state, setState];
};

export function StoreProvider({ children }) {
  const [state, setState] = useState({
    rehydrated: false,
  });

  const rehydrate = async () => {
    const data = localStorage.getItem('userToken');
    if (data) {
      setState((prev) => ({
        ...prev,
        ...(data && JSON.parse(data)),
        rehydrated: true,
      }));
    }
  };

  useEffect(() => {
    rehydrate();
  }, []);

  useEffect(() => {
    localStorage.setItem('userToken', JSON.stringify(state));
  }, [state]);

  return (
    <StoreContext.Provider value={[state, setState]}>
      {children}
    </StoreContext.Provider>
  );
}

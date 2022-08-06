import { useCallback } from 'react'
import { useStore } from './store'
import { logOut } from "../data/admData";
export const useAuth = () => {
    const [store, setStore] = useStore()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const login = useCallback(auth => setStore(prev => ({ ...prev, auth })), [])
    // eslint-disable-next-line react-hooks/exhaustive-deps, no-sequences
    const logout = useCallback(() => { logOut(); return setStore(({ auth, ...prev }) => prev), []})

    return [store && store.auth, { login, logout }]
}
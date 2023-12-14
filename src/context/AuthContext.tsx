import { createContext, ReactNode, useEffect, useState } from "react"
import { auth, provider } from "../service/Firebase"
import { signInWithPopup } from "firebase/auth"

type User = {
    id: string
    name: string
    avatar: string
}

type AuthContextType = {
    user: User | undefined
    singInWithGoogle: () => Promise<void>
}

type AuthContextProviderPros = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderPros) {

    const [user, setUser] = useState<User>()

    useEffect(() => {
        const unSubsCribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user
                if (!displayName || !photoURL) {
                    throw new Error("Falta informações da conta Google")
                }
                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
            return () => {
                unSubsCribe()
            }
        })
    }, [])

    async function singInWithGoogle() {

        const data = await signInWithPopup(auth, provider)
        if (data.user) {
            const { displayName, photoURL, uid } = data.user
            if (!displayName || !photoURL) {
                throw new Error("Falta informações da conta Google")
            }
            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }

    }

    return (
        <AuthContext.Provider value={{ user, singInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    )
}
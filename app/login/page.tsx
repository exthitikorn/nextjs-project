'use client'

import { useFormState } from "react-dom"
import { login } from "./action"

export default function loginPage() {
    
    const initState = {
        // message: ''
    }

    = useFormState(login, )
    return (
        <form action={login}>
            <div>
                Email: <input type="text" name="email" placeholder="Email" />
            </div>
            <div>
                Password: <input type="password" name="password" placeholder="Password" />
            </div>
            <button
                className="px-3 py-1 rounded-md bg-blue-400 text-white hover:bg-blue-500 hover:text-white"
                type="submit">
                Login
            </button>
        </form>
    )
}
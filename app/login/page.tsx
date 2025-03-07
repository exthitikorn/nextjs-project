"use client";

import { useActionState } from "react";
import { login } from "./action";

export default function LoginPage() {

    const initState: any = {
        message: ""
    };

    const [state, formAction] = useActionState(login, initState);

    return (
        <form action={formAction}>
            <div>
                Email: <input type="text" name="email" placeholder="Email" />
            </div>
            <div>
                Password: <input type="password" name="password" placeholder="Password" />
            </div>
            <div>
                Massage: {state.message}
            </div>
            <button
                className="px-3 py-1 rounded-md bg-blue-400 text-white hover:bg-blue-500"
                type="submit"
            >
                Login
            </button>
        </form>
    );
}

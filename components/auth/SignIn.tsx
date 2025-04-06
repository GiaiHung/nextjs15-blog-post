import { signIn } from "@/auth";
import React from "react";

const SignIn = () => {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("github", { redirectTo: "/" });
            }}
        >
            <button type="submit">Login</button>
        </form>
    );
};

export default SignIn;

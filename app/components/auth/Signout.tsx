import { signOut } from "@/auth";
import React from "react";

const Signout = () => {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <button type="submit">Logout</button>
        </form>
    );
};

export default Signout;

import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignIn from "./auth/SignIn";
import Signout from "./auth/Signout";

const Navbar = async () => {
    const session = await auth();

    // if (!session?.user) return null;

    return (
        <header className="font-work-sans bg-white px-5 py-3 shadow-sm">
            <nav className="flex items-center justify-between text-black">
                <Link href={"/"}>
                    <Image
                        src={"/logo.png"}
                        alt="Logo"
                        width={144}
                        height={30}
                    />
                </Link>

                <div className="flex items-center gap-5">
                    {session && session?.user ? (
                        <>
                            <Link href={"/create"}>
                                <span>Create</span>
                            </Link>
                            <Signout />
                            <Link href={`/user/${session?.user?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <SignIn />
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

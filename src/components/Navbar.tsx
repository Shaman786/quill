import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

function Navbar() {
    return (
        <div>
            <nav
                className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
                <MaxWidthWrapper>
                    <div className="flex h-14 items-center justify-between border-b border-zinc-200"></div>
                </MaxWidthWrapper>
            </nav>
        </div>
    );
}

export default Navbar;

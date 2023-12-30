import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import type { LogoProps } from "./types";

export function Logo({ className }: LogoProps) {
    return (
        <Link href="/" className={clsx("flex items-center gap-1", className)}>
            <Image src="/logo.svg" width={30} height={30} alt="logo" />
            <span className="font-semibold capitalize">Taskify</span>
        </Link>
    );
}

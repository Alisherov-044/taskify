import clsx from "clsx";
import Link from "next/link";

import type { ButtonProps } from "./types";

export function Button({ href, children, variant = "primary" }: ButtonProps) {
    const variants = {
        default: "px-3 py-1 rounded",
        primary: "bg-black text-white text-md",
        outline: "border",
        ghost: "bg-transparent hover:bg-black/5 transition",
    };

    return href ? (
        <Link href={href} className={clsx(variants.default, variants[variant])}>
            {children}
        </Link>
    ) : (
        <button className={clsx(variants.default, variants[variant])}>
            {children}
        </button>
    );
}

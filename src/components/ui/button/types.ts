import type { ReactNode } from "react";

export type ButtonProps = {
    href?: string;
    children: ReactNode;
    variant?: "primary" | "outline" | "ghost";
};

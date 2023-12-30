import { Button, Logo } from "@/components";

export function Header() {
    return (
        <header className="px-4 py-3 border-b bg-white shadow-sm">
            <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
                <Logo className="hidden sm:flex" />
                <div className="flex items-center justify-between gap-2 w-full sm:w-fit">
                    <Button variant="outline" href="/login">
                        Login
                    </Button>
                    <Button href="/signup">Get Taskify for free</Button>
                </div>
            </nav>
        </header>
    );
}

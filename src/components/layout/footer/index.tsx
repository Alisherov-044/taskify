import { Button, Logo } from "@/components";

export function Footer() {
    return (
        <footer className="px-4 py-3 border-t">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                <Logo className="hidden sm:flex" />
                <div className="flex items-center justify-between gap-1 w-full sm:w-fit">
                    <Button href="privacy-policy" variant="ghost">
                        Privacy Policy
                    </Button>
                    <Button href="terms-of-service" variant="ghost">
                        Terms of Service
                    </Button>
                </div>
            </div>
        </footer>
    );
}

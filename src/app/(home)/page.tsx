import Image from "next/image";
import { Button } from "@/components";

export default function Home() {
    return (
        <main className="flex flex-col gap-5 items-center justify-center">
            <div className="flex items-center gap-2 p-4 rounded-full bg-amber-100 text-amber-600 font-bold uppercase fill-amber-500">
                <Image src="/medal.svg" width={30} height={30} alt="medal" />
                <span>No1 Task Managment</span>
            </div>
            <h1 className="text-3xl font-bold md:text-5xl">
                Taskify helps team move
            </h1>
            <div className="p-4 rounded-md text-white text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600">
                Work forward.
            </div>
            <p className="text-center text-gray-400 text-md md:text-xl max-w-sm md:max-w-lg">
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique - accomplish it all with Taskify.
            </p>
            <Button href="/signup">Get Taskify for free</Button>
        </main>
    );
}

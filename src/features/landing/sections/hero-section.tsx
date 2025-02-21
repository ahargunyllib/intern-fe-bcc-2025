"use client";

import Button from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
	const router = useRouter();

	return (
		<section className="w-full h-screen flex flex-col gap-4 items-center justify-center">
			You are not logged in, please login to continue
			<Button onClick={() => router.push("/login")}>Login</Button>
		</section>
	);
}

"use client";

import Button from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotLoggedInCard() {
	const router = useRouter();

	return (
		<>
			<span>You are not logged in, please login to continue</span>
			<Button onClick={() => router.push("/login")}>Login</Button>
		</>
	);
}

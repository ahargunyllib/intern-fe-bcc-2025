"use client";

import Button from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotLoggedInCard() {
	const router = useRouter();

	return (
		<div className="mx-4 max-w-sm w-full h-fit border rounded-lg p-4 flex flex-col gap-4 shadow-md">
			<h2 className="text-lg font-semibold text-center">
				You are not logged in, please login to continue
			</h2>
			<Button onClick={() => router.push("/login")}>Login</Button>
		</div>
	);
}

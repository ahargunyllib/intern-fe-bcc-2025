"use client";

import Button from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function AdminDummy() {
	const router = useRouter();

	return (
		<div className="mx-4 max-w-sm w-full h-fit border rounded-lg p-4 flex flex-col gap-4 shadow-md">
			<h2 className="text-lg font-semibold text-center">Logged in</h2>
			<p className="text-center">This is admin only</p>
			<Button onClick={() => router.back()}>Back</Button>
		</div>
	);
}

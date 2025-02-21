"use client";

import Button from "@/shared/components/ui/button";
import type { User } from "@/shared/types";
import { useRouter } from "next/navigation";

type Props = {
	user: User;
};

export default function LoggedInCard({ user }: Props) {
	const router = useRouter();

	return (
		<div className="mx-4 max-w-sm w-full h-fit border rounded-lg p-4 flex flex-col gap-4 shadow-md">
			<h2 className="text-lg font-semibold text-center">
				You are logged in as a {user.role}
			</h2>
			<Button onClick={() => router.push("/login")}>Login</Button>
		</div>
	);
}

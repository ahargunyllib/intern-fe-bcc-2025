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
		<>
			<span>You are logged in as a {user.role}</span>
			<Button onClick={() => router.push("/login")}>Login</Button>
		</>
	);
}

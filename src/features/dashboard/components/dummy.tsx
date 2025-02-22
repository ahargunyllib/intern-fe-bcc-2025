import Button from "@/shared/components/ui/button";
import { useLogoutMutation } from "@/shared/repository/query/auth";
import type { User } from "@/shared/types";
import { useRouter } from "next/navigation";

type Props = {
	user: User;
};

export default function Dummy({ user }: Props) {
	const router = useRouter();
	const { mutate: logout, isPending } = useLogoutMutation();

	return (
		<div className="mx-4 max-w-sm w-full h-fit border rounded-lg p-4 flex flex-col gap-4 shadow-md">
			<h2 className="text-lg font-semibold text-center">Logged in</h2>
			<p className="text-center">Welcome, {user.email}!</p>
			{user.role === "admin" && (
				<Button onClick={() => router.push("/dashboard/admin")}>
					Admin button
				</Button>
			)}
			<Button
				variant="destructive"
				onClick={() => logout()}
				disabled={isPending}
			>
				Logout
			</Button>
		</div>
	);
}

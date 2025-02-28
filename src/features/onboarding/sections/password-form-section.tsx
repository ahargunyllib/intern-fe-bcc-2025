import { useRouter } from "next/navigation";

export default function PasswordFormSection() {
	const router = useRouter();
	return (
		<div>
			<h1>Password Form Section</h1>
			<button onClick={() => router.replace("/")} type="button">
				Next
			</button>
		</div>
	);
}

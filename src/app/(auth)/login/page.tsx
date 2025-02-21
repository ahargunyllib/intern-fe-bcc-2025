import LoginForm from "@/features/login/components/login-form";

export default function Page() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="mx-4 max-w-sm w-full h-fit border rounded-lg p-4 flex flex-col gap-4 shadow-md">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<LoginForm />
			</div>
		</div>
	);
}

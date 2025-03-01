import {
	LucideEye,
	LucideEyeOff,
	LucideKeyRound,
} from "@/shared/components/icons";
import Button from "@/shared/components/ui/button";
import { FormFieldInput } from "@/shared/components/ui/form";
import { login } from "@/shared/repository/action/auth";
import { LoginSchema } from "@/shared/repository/dto/auth";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PasswordFormSection() {
	const router = useRouter();

	const [isShowPassword, setIsShowPassword] = useState({
		password: false,
		confirmPassword: false,
	});

	const toggleShowPassword = (type: keyof typeof isShowPassword) => {
		setIsShowPassword((prev) => ({
			...prev,
			[type]: !prev[type],
		}));
	};

	return (
		<div className="h-screen flex items-center justify-center p-8">
			<div className="flex flex-row items-stretch justify-center gap-4 w-3/4">
				<div className="flex flex-col items-start gap-4">
					<h1 className="font-bold text-4xl">Masukkan Kata Sandi Anda</h1>
					<Formik
						initialValues={{
							password: "",
							confirmPassword: "",
						}}
						onSubmit={(values) => {
							console.log(values);
						}}
					>
						<Form className="flex flex-col gap-4">
							<FormFieldInput
								name="password"
								label="Password"
								type={isShowPassword.password ? "text" : "password"}
								placeholder="Masukkan password"
								suffixIcon={
									<button
										className="text-foreground/50 hover:text-foreground transition-colors duration-150 ease-in-out"
										type="button"
										onClick={() => toggleShowPassword("password")}
									>
										{isShowPassword.password ? (
											<LucideEyeOff width={16} height={16} />
										) : (
											<LucideEye width={16} height={16} />
										)}
									</button>
								}
							/>
							<FormFieldInput
								name="confirmPassword"
								label="Ulangi Password"
								type={isShowPassword.confirmPassword ? "text" : "password"}
								placeholder="Masukkan ulang password"
								suffixIcon={
									<button
										className="text-foreground/50 hover:text-foreground transition-colors duration-150 ease-in-out"
										type="button"
										onClick={() => toggleShowPassword("confirmPassword")}
									>
										{isShowPassword.confirmPassword ? (
											<LucideEyeOff width={16} height={16} />
										) : (
											<LucideEye width={16} height={16} />
										)}
									</button>
								}
							/>
							<Button
								onClick={() => router.replace("/")}
								type="button"
								className="w-fit"
							>
								Simpan
							</Button>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
}

import { useOnboarding } from "@/features/onboarding/hooks/use-onboarding";
import { LucideEye, LucideEyeOff } from "@/shared/components/icons";
import Button from "@/shared/components/ui/button";
import { FormFieldInput } from "@/shared/components/ui/form";
import { Form, Formik } from "formik";
import { useState } from "react";

export default function PasswordFormSection() {
	const { nextStep } = useOnboarding();

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
						onSubmit={(values) => {}}
					>
						<Form className="flex flex-col gap-4">
							<FormFieldInput
								name="password"
								label="Kata Sandi"
								type={isShowPassword.password ? "text" : "password"}
								placeholder="Masukkan kata sandi"
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
								label="Ulangi Kata Sandi"
								type={isShowPassword.confirmPassword ? "text" : "password"}
								placeholder="Masukkan ulang kata sandi"
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
								onClick={() => nextStep()}
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

"use client";

import {
	LucideEye,
	LucideEyeOff,
	LucideKeyRound,
	LucideMail,
} from "@/shared/components/icons";
import Button from "@/shared/components/ui/button";
import { FormFieldInput } from "@/shared/components/ui/form";
import { LoginSchema } from "@/shared/repository/dto/auth";
import { useLoginMutation } from "@/shared/repository/query/auth";
import { Form, Formik } from "formik";
import { useState } from "react";

export default function LoginForm() {
	const { mutate: login, isPending } = useLoginMutation();
	const [isShowPassword, setIsShowPassword] = useState(false);

	const toggleShowPassword = () => {
		setIsShowPassword((prev) => !prev);
	};

	return (
		<Formik
			validationSchema={LoginSchema}
			initialValues={{
				email: "",
				password: "",
			}}
			onSubmit={(values) => {
				login(values);
			}}
		>
			<Form className="flex flex-col gap-4 w-full">
				<FormFieldInput
					name="email"
					label="Email"
					placeholder="user/admin@example.com"
					prefixIcon={<LucideMail width={16} height={16} />}
				/>
				<FormFieldInput
					name="password"
					label="Kata Sandi"
					type={isShowPassword ? "text" : "password"}
					placeholder="password"
					prefixIcon={<LucideKeyRound width={16} height={16} />}
					suffixIcon={
						<button
							className="text-foreground/50 hover:text-foreground transition-colors duration-150 ease-in-out"
							type="button"
							onClick={toggleShowPassword}
						>
							{isShowPassword ? (
								<LucideEyeOff width={16} height={16} />
							) : (
								<LucideEye width={16} height={16} />
							)}
						</button>
					}
				/>
				<Button type="submit" disabled={isPending}>
					Masuk
				</Button>
			</Form>
		</Formik>
	);
}

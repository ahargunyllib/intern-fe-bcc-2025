"use client";

import Button from "@/shared/components/ui/button";
import { FormFieldInput } from "@/shared/components/ui/form";
import { LoginSchema } from "@/shared/repository/dto/auth";
import { useLoginMutation } from "@/shared/repository/query/auth";
import { Form, Formik } from "formik";

export default function LoginForm() {
	const { mutate: login, isPending } = useLoginMutation();

	return (
		<Formik
			validationSchema={LoginSchema}
			initialValues={{
				email: "",
				password: "",
			}}
			onSubmit={(values) => {
				console.log(values);
				login(values);
			}}
		>
			<Form className="flex flex-col gap-4">
				<FormFieldInput
					name="email"
					label="Email"
					placeholder="user/admin@example.com"
				/>
				<FormFieldInput
					name="password"
					label="Password"
					type="password"
					placeholder="password"
				/>
				<Button type="submit" disabled={isPending}>
					Login
				</Button>
			</Form>
		</Formik>
	);
}

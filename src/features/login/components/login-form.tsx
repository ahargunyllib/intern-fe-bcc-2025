"use client";

import Button from "@/shared/components/ui/button";
import { FormFieldInput } from "@/shared/components/ui/form";
import { LoginSchema } from "@/shared/repository/dto/auth";
import { Form, Formik } from "formik";

export default function LoginForm() {
	return (
		<Formik
			validationSchema={LoginSchema}
			initialValues={{
				email: "",
				password: "",
			}}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			<Form className="flex flex-col gap-4">
				<FormFieldInput name="email" label="Email" />
				<FormFieldInput name="password" label="Password" type="password" />
				<Button type="submit">Login</Button>
			</Form>
		</Formik>
	);
}

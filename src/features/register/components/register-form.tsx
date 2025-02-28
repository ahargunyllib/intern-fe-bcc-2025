"use client";

import { LucideMail, LucideUser } from "@/shared/components/icons";
import Button from "@/shared/components/ui/button";
import { FormFieldInput } from "@/shared/components/ui/form";
import { RegisterSchema } from "@/shared/repository/dto/auth";
import { Form, Formik } from "formik";

export default function RegisterForm() {
	return (
		<Formik
			validationSchema={RegisterSchema}
			initialValues={{
				display_name: "",
				email: "",
			}}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			<Form className="flex flex-col gap-4">
				<FormFieldInput
					name="display_name"
					label="Display Name"
					placeholder="Name"
					prefixIcon={<LucideUser width={16} height={16} />}
				/>
				<FormFieldInput
					name="email"
					label="Email"
					type="email"
					placeholder="Email"
					prefixIcon={<LucideMail width={16} height={16} />}
				/>
				<Button type="submit" disabled={false} className="mt-4 bg-[#5A81FA]">
					Buat Akun
				</Button>
			</Form>
		</Formik>
	);
}

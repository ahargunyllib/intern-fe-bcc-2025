"use client";

import { LucideMail, LucideUser } from "@/shared/components/icons";
import Button from "@/shared/components/ui/button";
import { FormFieldInput } from "@/shared/components/ui/form";
import { RegisterSchema } from "@/shared/repository/dto/auth";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function RegisterForm() {
	const router = useRouter();
	return (
		<Formik
			validationSchema={RegisterSchema}
			initialValues={{
				display_name: "",
				email: "",
			}}
			onSubmit={(values) => {
				console.log(values);
				toast.warning("Fitur belum bisa digunakan", {
					description: "Lanjut ke halaman onboarding",
					action: (
						<Button onClick={() => router.push("/onboarding")}>
							Onboarding
						</Button>
					),
				});
			}}
		>
			<Form className="flex flex-col gap-4 w-full">
				<FormFieldInput
					name="display_name"
					label="Nama Tampilan"
					placeholder="Nama"
					prefixIcon={<LucideUser width={16} height={16} />}
				/>
				<FormFieldInput
					name="email"
					label="Email"
					type="email"
					placeholder="Email"
					prefixIcon={<LucideMail width={16} height={16} />}
				/>
				<Button type="submit" disabled={false}>
					Buat Akun
				</Button>
			</Form>
		</Formik>
	);
}

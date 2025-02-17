import { type InferType, object, string } from "yup";

export const LoginSchema = object({
	email: string().email("Email is invalid").required("Email is required"),
	password: string().required("Password is required"),
});

export type LoginRequest = InferType<typeof LoginSchema>;

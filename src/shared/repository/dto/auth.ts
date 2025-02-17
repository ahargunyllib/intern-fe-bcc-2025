import { type InferType, object, string } from "yup";

export const LoginSchema = object({
	email: string().email().required(),
	password: string().required(),
});

export type LoginRequest = InferType<typeof LoginSchema>;

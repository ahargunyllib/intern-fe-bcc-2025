import type { User } from "@/shared/types";
import { type InferType, object, string } from "yup";

export const LoginSchema = object({
	email: string().email("Email tidak valid").required("Email wajib diisi"),
	password: string().required("Kata sandi wajib diisi"),
});

export type LoginRequest = InferType<typeof LoginSchema>;

export type LoginResponse = {
	user: User;
};

export const RegisterSchema = object({
	display_name: string().required("Nama tampilan wajib diisi"),
	email: string().email("Email tidak valid").required("Email wajib diisi"),
});

export type RegisterRequest = InferType<typeof RegisterSchema>;

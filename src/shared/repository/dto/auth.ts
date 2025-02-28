import type { User } from "@/shared/types";
import { type InferType, object, string } from "yup";

export const LoginSchema = object({
	email: string().email("Email is invalid").required("Email is required"),
	password: string().required("Password is required"),
});

export type LoginRequest = InferType<typeof LoginSchema>;

export type LoginResponse = {
	user: User;
};

export const RegisterSchema = object({
	display_name: string().required("Display name is required"),
	email: string().email("Email is invalid").required("Email is required"),
});

export type RegisterRequest = InferType<typeof RegisterSchema>;

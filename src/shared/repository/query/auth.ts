"use client";

import { login } from "@/shared/repository/action/auth";
import {
	createSession,
	destroySession,
	getSession,
} from "@/shared/repository/action/session";
import type { LoginRequest } from "@/shared/repository/dto/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLoginMutation = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation({
		mutationKey: ["auth"],
		mutationFn: (data: LoginRequest) => login(data),
		onSuccess: async (res) => {
			if (!res.success) {
				toast.error(res.message);
				return;
			}

			toast.success(res.message);

			await createSession(res.data);
			router.push("/dashboard");

			queryClient.refetchQueries({ queryKey: ["auth"] });
		},
	});
};

export const useLogoutMutation = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation({
		mutationKey: ["auth"],
		mutationFn: async () => {},
		onSuccess: async () => {
			toast.success("Logout successful");

			await destroySession();
			router.push("/");

			queryClient.resetQueries({ queryKey: ["auth"] });
		},
	});
};

export const useSessionQuery = () => {
	return useQuery({
		queryKey: ["auth"],
		queryFn: () => getSession(),
	});
};

import type { User } from "@/shared/types";

export type JWTClaims = {
	// TODO: Define REAL JWT claims
	user: User;
};

"use client";

import LoggedInCard from "@/features/landing/components/logged-in-card";
import NotLoggedInCard from "@/features/landing/components/not-logged-in-card";
import { useSessionQuery } from "@/shared/repository/query/auth";

export default function HeroSectionContainer() {
	const { data, error, isLoading } = useSessionQuery();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!data) {
		return <div>Welcome, guest</div>;
	}

	const isLoggedIn = data.isLoggedIn;

	return isLoggedIn ? <LoggedInCard user={data.user} /> : <NotLoggedInCard />;
}

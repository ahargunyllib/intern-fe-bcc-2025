"use client";

import Dummy from "@/features/dashboard/components/dummy";
import { useSessionQuery } from "@/shared/repository/query/auth";

export default function DummyContainer() {
	const { data, error, isLoading } = useSessionQuery();

	if (isLoading) {
		return (
			<div className="mx-4 max-w-sm w-full h-fit border rounded-lg p-4 flex flex-col gap-4 shadow-md">
				<div className="w-full h-12 bg-slate-500 rounded-md animate-pulse" />
				<div className="w-full h-8 bg-slate-500 rounded-md animate-pulse" />
			</div>
		);
	}

	if (error || !data) {
		return (
			<div className="mx-4 max-w-sm w-full h-fit border rounded-lg p-4 flex flex-col gap-4 shadow-md">
				<h2 className="text-lg font-semibold text-center">An error occurred</h2>
				<p className="text-center text-red-500">{error?.message}</p>
			</div>
		);
	}

	const isLoggedIn = data.isLoggedIn;

	if (!isLoggedIn) {
		return null;
	}

	return <Dummy user={data.user} />;
}

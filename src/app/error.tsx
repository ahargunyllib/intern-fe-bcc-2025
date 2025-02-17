"use client";

export default function Page({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return <div>{error.message}</div>;
}

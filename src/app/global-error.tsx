"use client";

export default function GlobalError({
	error,
}: { error: Error & { digest?: string } }) {
	return <div>{error.message}</div>;
}

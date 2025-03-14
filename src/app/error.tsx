"use client";

export default function Page({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<section className="flex items-center justify-center h-screen px-16">
			<div className="px-12 py-12 flex flex-col items-center justify-center gap-y-12 rounded-3xl border max-w-[32rem]">
				<div className="space-y-6 text-center">
					<h2 className="text-mobile-title font-extrabold">
						Oops, Terjadi Kesalahan!
					</h2>
					<p className="text-muted-foreground">
						Sepertinya terjadi kesalahan pada server. Mohon coba beberapa saat
						lagi.
					</p>
				</div>
			</div>
		</section>
	);
}

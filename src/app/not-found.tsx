import Button from "@/shared/components/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<section className="flex items-center justify-center h-screen px-16">
			<div className="px-12 py-12 flex flex-col items-center justify-center gap-y-12 rounded-3xl border max-w-[32rem]">
				<div className="space-y-6 text-center">
					<h2 className="text-mobile-title font-extrabold">
						Oops, Halaman tidak ditemukan!
					</h2>
					<p className="text-muted-foreground">
						Sepertinya halaman yang anda sedang cari tidak ada. Jangan khawatir,
						mari kembali ke laman sebelumnya.
					</p>
				</div>

				<Link href="/">
					<Button className="w-fit">Kembali</Button>
				</Link>
			</div>
		</section>
	);
}

import RegisterForm from "@/features/register/components/register-form";
import { Blob } from "@/shared/components/icons";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<section className="h-screen w-screen grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-0">
			<div className="hidden lg:block absolute -z-0 h-screen w-screen overflow-clip">
				<Blob />
			</div>
			<div className="col-span-1 z-10 hidden lg:flex flex-col h-full p-16 justify-between">
				<div className="relative w-2/4 aspect-square">
					<Image src="/logo.png" alt="Locapreneur Logo" fill />
				</div>
				<div className="flex flex-col gap-4 text-white text-pretty w-2/3">
					<h1 className="font-bold text-5xl">
						Selamat datang di Locapreneur.id
					</h1>
					<span className="font-bold text-2xl">
						Bersama kita, pengusaha lokal Indonesia, tumbuh dan sukses.
					</span>
				</div>
			</div>
			<div className="col-span-1 z-10 flex flex-col gap-4 h-full p-16 justify-center items-center lg:items-start lg:w-3/4">
				<h2 className="font-bold text-7xl">Daftar</h2>
				<RegisterForm />
				<span className="font-light text-xs text-center">
					Sudah punya akun?{" "}
					<Link href="/login" className="hover:underline font-bold text-xs">
						Login Sekarang!
					</Link>
				</span>
			</div>
		</section>
	);
}

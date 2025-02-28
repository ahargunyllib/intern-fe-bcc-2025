import LoginForm from "@/features/login/components/login-form";
import { Blob } from "@/shared/components/icons";
import Link from "next/link";

export default function Page() {
	return (
		<section className="h-screen w-screen grid grid-cols-2 grid-rows-1 gap-0">
			<div className="h-screen w-screen absolute -z-0 overflow-y-hidden">
				<Blob />
			</div>
			<div className="col-span-1 z-10 flex flex-col h-full p-16 justify-between">
				<div className="w-2/4 aspect-square rounded-full bg-white" />
				<div className="flex flex-col gap-4 text-white w-3/5 text-pretty">
					<h1 className="font-bold text-6xl">
						Selamat datang di Locapreneur.id
					</h1>
					<span className="font-bold text-3xl">
						Bersama kita, pengusaha lokal Indonesia, tumbuh dan sukses.
					</span>
				</div>
			</div>
			<div className="col-span-1 z-10 flex flex-col gap-4 h-full p-16 justify-center w-3/4">
				<h2 className="font-bold text-7xl">Login</h2>
				<LoginForm />
				<span className="font-light text-xs">
					Belum punya akun?{" "}
					<Link href="/register" className="hover:underline font-bold text-xs">
						Registrasi Sekarang!
					</Link>
				</span>
			</div>
		</section>
	);
}

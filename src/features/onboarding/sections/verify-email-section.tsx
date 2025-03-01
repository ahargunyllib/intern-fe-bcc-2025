import { useOnboarding } from "@/features/onboarding/hooks/use-onboarding";
import Button from "@/shared/components/ui/button";

export default function VerifyEmailSection() {
	const { setStep } = useOnboarding();
	return (
		<div className="h-screen flex items-center justify-center p-8">
			<div className="flex flex-row items-stretch justify-center gap-4 w-1/2">
				<div className="hidden lg:block aspect-square h-full w-64 bg-black flex-shrink-0" />
				<div className="flex flex-col items-start gap-4">
					<h1 className="font-bold text-4xl">Verifikasi Email</h1>
					<p className="text-xl">
						Kami telah mengirim kode OTP ke loremipsum@gmail.com untuk
						memverifikasi email Anda. Cek kode OTP di aplikasi Gmail.
					</p>
					<span className="font-light text-xs text-center">
						Tidak menerima kode OTP?{" "}
						<span className="hover:underline font-bold text-xs">
							Kirim Ulang
						</span>
					</span>
					<Button onClick={() => setStep(1)} type="button">
						Simpan
					</Button>
				</div>
			</div>
		</div>
	);
}

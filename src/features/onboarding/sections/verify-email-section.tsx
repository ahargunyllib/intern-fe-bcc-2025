import { useOnboarding } from "@/features/onboarding/hooks/use-onboarding";
import Button from "@/shared/components/ui/button";
import Slot from "@/shared/components/ui/input-otp";
import { OTPInput } from "input-otp";
import Image from "next/image";

export default function VerifyEmailSection() {
	const { nextStep } = useOnboarding();
	return (
		<div className="h-screen flex items-center justify-center p-8">
			<div className="flex flex-row items-stretch justify-center gap-4 w-full sm:w-1/2">
				<div className="relative hidden lg:block aspect-square h-full w-64 flex-shrink-0">
					<Image src="/logo.png" alt="Locapreneur Logo" fill />
				</div>
				<div className="flex flex-col items-start gap-4">
					<h1 className="font-bold text-4xl">Verifikasi Email</h1>
					<p className="text-xl">
						Kami telah mengirim kode OTP ke loremipsum@gmail.com untuk
						memverifikasi email Anda. Cek kode OTP di aplikasi Gmail.
					</p>
					<OTPInput
						maxLength={6}
						containerClassName="group flex items-center has-[:disabled]:opacity-30"
						render={({ slots }) => (
							<div className="flex gap-2">
								{slots.map((slot, idx) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<Slot key={idx} {...slot} />
								))}
							</div>
						)}
					/>
					<span className="font-light text-xs text-center">
						Tidak menerima kode OTP?{" "}
						<span className="hover:underline font-bold text-xs">
							Kirim Ulang
						</span>
					</span>
					<Button onClick={() => nextStep()} type="button">
						Simpan
					</Button>
				</div>
			</div>
		</div>
	);
}

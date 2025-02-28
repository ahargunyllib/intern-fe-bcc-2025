import { useOnboarding } from "@/features/onboarding/hooks/use-onboarding";

export default function VerifyEmailSection() {
	const { setStep } = useOnboarding();
	return (
		<div>
			<h1>Verify Email Section</h1>
			<button onClick={() => setStep(1)} type="button">
				Next
			</button>
		</div>
	);
}

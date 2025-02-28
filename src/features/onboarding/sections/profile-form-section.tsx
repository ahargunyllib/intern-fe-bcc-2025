import { useOnboarding } from "@/features/onboarding/hooks/use-onboarding";

export default function ProfileFormSection() {
	const { setStep } = useOnboarding();

	return (
		<div>
			<h1>Profile Form Section</h1>
			<button onClick={() => setStep(2)} type="button">
				Next
			</button>
		</div>
	);
}

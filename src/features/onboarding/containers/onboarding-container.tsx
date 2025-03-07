"use client";

import Header from "@/features/onboarding/components/header";
import { useOnboarding } from "@/features/onboarding/hooks/use-onboarding";

export default function OnboardingContainer() {
	const { step, steps } = useOnboarding();
	return (
		<section className="min-h-screen h-full">
			<Header />
			{steps[step]}
		</section>
	);
}

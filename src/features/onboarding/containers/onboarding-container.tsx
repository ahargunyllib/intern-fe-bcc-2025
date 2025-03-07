"use client";

import { useOnboarding } from "@/features/onboarding/hooks/use-onboarding";
import Header from "@/shared/components/header";

export default function OnboardingContainer() {
	const { step, steps } = useOnboarding();
	return (
		<section className="min-h-screen h-full">
			<Header />
			{steps[step]}
		</section>
	);
}

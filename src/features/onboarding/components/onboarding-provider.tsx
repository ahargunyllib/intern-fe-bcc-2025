"use client";

import { OnboardingContext } from "@/features/onboarding/contexts/onboarding-context";
import { type PropsWithChildren, useState } from "react";

export default function OnboardingProvider({ children }: PropsWithChildren) {
	const [step, setStep] = useState(0);

	return (
		<OnboardingContext.Provider value={{ step, setStep }}>
			{children}
		</OnboardingContext.Provider>
	);
}

import { OnboardingContext } from "@/features/onboarding/contexts/onboarding-context";
import { useContext } from "react";

export const useOnboarding = () => {
	const context = useContext(OnboardingContext);
	if (!context) {
		throw new Error("useOnboarding must be used within a OnboardingProvider");
	}

	return context;
};

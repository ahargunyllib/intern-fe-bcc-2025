import { createContext } from "react";

type OnboardingContextType = {
	step: number;
	setStep: (step: number) => void;
};

export const OnboardingContext = createContext<
	OnboardingContextType | undefined
>(undefined);

import { type JSX, createContext } from "react";

type OnboardingContextType = {
	steps: readonly JSX.Element[];
	step: number;
	nextStep: () => void;
	prevStep: () => void;
};

export const OnboardingContext = createContext<
	OnboardingContextType | undefined
>(undefined);

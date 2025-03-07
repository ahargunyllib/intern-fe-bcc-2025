"use client";

import { OnboardingContext } from "@/features/onboarding/contexts/onboarding-context";
import PasswordFormSection from "@/features/onboarding/sections/password-form-section";
import ProfileFormSection from "@/features/onboarding/sections/profile-form-section";
import VerifyEmailSection from "@/features/onboarding/sections/verify-email-section";
import type { Indexes } from "@/shared/types";
import { useRouter } from "next/navigation";
import { type PropsWithChildren, useState } from "react";

export default function OnboardingProvider({ children }: PropsWithChildren) {
	const steps = [
		<VerifyEmailSection key="VerifyEmailSection" />,
		<PasswordFormSection key="PasswordFormSection" />,
		<ProfileFormSection key="ProfileFormSection" />,
	] as const;

	type StepIndexes = Indexes<typeof steps>;

	const [step, setStep] = useState<StepIndexes>(0);
	const router = useRouter();

	const prevStep = () => {
		setStep((prevStep) => {
			if (prevStep === 0) {
				router.back();
				return prevStep;
			}
			return (prevStep - 1) as StepIndexes;
		});
	};

	const nextStep = () => {
		setStep((prevStep) => {
			if (prevStep === steps.length - 1) {
				router.replace("/");
				return prevStep;
			}
			return (prevStep + 1) as StepIndexes;
		});
	};

	return (
		<OnboardingContext.Provider
			value={{ step, prevStep, nextStep, steps: steps }}
		>
			{children}
		</OnboardingContext.Provider>
	);
}

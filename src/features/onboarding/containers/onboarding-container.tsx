"use client";

import { useOnboarding } from "@/features/onboarding/hooks/use-onboarding";
import PasswordFormSection from "@/features/onboarding/sections/password-form-section";
import ProfileFormSection from "@/features/onboarding/sections/profile-form-section";
import VerifyEmailSection from "@/features/onboarding/sections/verify-email-section";

export default function OnboardingContainer() {
	const { step } = useOnboarding();
	return (
		<>
			{step === 0 && <VerifyEmailSection />}
			{step === 1 && <ProfileFormSection />}
			{step === 2 && <PasswordFormSection />}
		</>
	);
}

"use client";

import { useOnboarding } from "@/features/onboarding/hooks/use-onboarding";
import PasswordFormSection from "@/features/onboarding/sections/password-form-section";
import ProfileFormSection from "@/features/onboarding/sections/profile-form-section";
import VerifyEmailSection from "@/features/onboarding/sections/verify-email-section";
import Header from "@/shared/components/header";

export default function OnboardingContainer() {
	const { step } = useOnboarding();
	return (
		<section className="min-h-screen h-full">
			<Header />
			{step === 0 && <VerifyEmailSection />}
			{step === 1 && <ProfileFormSection />}
			{step === 2 && <PasswordFormSection />}
		</section>
	);
}

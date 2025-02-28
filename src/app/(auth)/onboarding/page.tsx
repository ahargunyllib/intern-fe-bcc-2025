import OnboardingProvider from "@/features/onboarding/components/onboarding-provider";
import OnboardingContainer from "@/features/onboarding/containers/onboarding-container";

export default function Page() {
	return (
		<OnboardingProvider>
			<OnboardingContainer />
		</OnboardingProvider>
	);
}

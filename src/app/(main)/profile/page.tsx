import CreatePostForm from "@/features/profile/components/create-post-form";
import ProfileContainer from "@/features/profile/containers/profile-container";

export default function Page() {
	return (
		<div className="relative h-screen">
			<ProfileContainer />
			<div className="w-full h-full fixed inset-0">
				<CreatePostForm />
			</div>
		</div>
	);
}

"use client";

import { MaterialSymbolsPostAdd } from "@/shared/components/icons";
import Button from "@/shared/components/ui/button";
import Textarea from "@/shared/components/ui/textarea";
import { useModalStore } from "@/shared/stores/use-modal-store";

export default function CreatePostForm() {
	const { openModal } = useModalStore();

	return (
		<Button
			className="rounded-full size-20 fixed bottom-4 self-end"
			onClick={() =>
				openModal({
					children: (
						<div className="space-y-2 z-50">
							<Textarea className="w-full" placeholder="Ketik disini" />
							<div className="flex justify-end gap-2">
								<Button>Unggah</Button>
							</div>
						</div>
					),
					title: "Buat Postingan",
				})
			}
			onKeyDown={() => {}}
		>
			<MaterialSymbolsPostAdd fontSize={40} />
		</Button>
	);
}

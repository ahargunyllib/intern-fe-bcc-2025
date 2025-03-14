import { useDebounce } from "@/shared/hooks/use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useSearchQuery = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();
	const isInitializedRef = useRef(false);

	const [search, setSearch] = useState({
		search: searchParams.get("search") || undefined,
	});

	const debouncedPaginationState = useDebounce(search, 500);

	useEffect(() => {
		if (!isInitializedRef.current) {
			isInitializedRef.current = true;
			return;
		}

		const query = {
			search: debouncedPaginationState.search,
		};

		const urlSearchParams = new URLSearchParams(searchParams);
		for (const [key, value] of Object.entries(query)) {
			if (value) urlSearchParams.set(key, value.toString());
			else urlSearchParams.delete(key);
		}

		urlSearchParams.size === 0
			? router.replace(pathname)
			: router.replace(`${pathname}?${urlSearchParams.toString()}`);
	}, [debouncedPaginationState, pathname, router, searchParams]);

	return {
		search,
		setSearch,
	};
};

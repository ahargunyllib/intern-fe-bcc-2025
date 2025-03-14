"use client";

import SearchInput from "@/shared/components/ui/search-input";
import { useSearchQuery } from "@/shared/hooks/use-search-query";

export default function SearchBar() {
	const { search, setSearch } = useSearchQuery();

	return (
		<SearchInput
			value={search.search || ""}
			handleSearch={(search) => setSearch({ search })}
		/>
	);
}

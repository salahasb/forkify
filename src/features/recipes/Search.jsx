import ActionBtn from "../../ui/ActionBtn";
import { useState } from "react";
import { useRecipes } from "../../contexts/RecipesContext";
import { SearchSvg } from "../../svgComponents";

export default function Search() {
	const [query, setQuery] = useState("");

	const { fetchData } = useRecipes();

	function handleSearchRecipes(e) {
		e.preventDefault();
		if (!query) return;
		fetchData(query, setQuery);
	}

	return (
		<form className="search-box" onSubmit={handleSearchRecipes}>
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				type="text"
				placeholder="Search over 1,000,000 recipes..."
			/>

			<ActionBtn className={"search-btn"}>
				<SearchSvg />
				Search
			</ActionBtn>
		</form>
	);
}

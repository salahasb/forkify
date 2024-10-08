import { PersonSvg } from "../svgComponents";
import { useLocation } from "react-router-dom";
import { useSideBar } from "../contexts/SideBarContext";

export default function Recipe({ recipe }) {
	// const { setShowSideBar } = useSideBar();

	const { hash } = useLocation();
	const selectedRecipeId = hash.substring(1);

	const isSelected = recipe.id === selectedRecipeId;

	return (
		<li
			className={`recipe ${isSelected ? "active" : ""}`}
			// onClick={() => setShowSideBar(false)}
		>
			<a href={`#${recipe.id}`}>
				<img className="recipe-img" src={recipe.image_url} alt={recipe.title} />

				<div className="recipe-info">
					<p className="recipe-title">{recipe.title}</p>
					<span className="recipe-publisher">{recipe.publisher}</span>
				</div>
				{recipe.key && (
					<div className="recipe-result-options">
						<PersonSvg />
						{/* <ActionBtn className="close-modal close">
              <CloseSvg color={"#000"} />
            </ActionBtn> */}
					</div>
				)}
			</a>
		</li>
	);
}

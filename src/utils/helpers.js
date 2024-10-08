import { API_KEY, URL_PATH } from "./constant";

export async function delay(delay) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, delay * 1000);
	});
}

export async function getRecipes(recipeId) {
	try {
		const res = await fetch(`${URL_PATH}?search=${recipeId}&key=${API_KEY}`);

		const data = await res.json();

		if (!res.ok) throw new Error(data.message);

		const { recipes } = data.data;

		if (!recipes.length)
			throw "No recipes found for your query! Please try again ;)";

		return recipes;
	} catch (error) {
		throw new Error(error);
	}
}

export async function postRecipe(recipe) {
	try {
		const reqInit = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(recipe),
		};

		const res = await fetch(`${URL_PATH}/?key=${API_KEY}`, reqInit);

		const data = await res.json();

		console.log(data);

		if (data.status === "fail") {
			const errMsg = data.message
				.replace("title", "Title")
				.replace("publisher", "Publisher")
				.replace("image_url", "Image URL")
				.replace("source_url", "Url");

			throw errMsg;
		}

		if (!res.ok) throw data.message;

		return data.data.recipe;
	} catch (error) {
		throw new Error(error);
	}
}

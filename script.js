// Recipe App JavaScript code
document.addEventListener("DOMContentLoaded", () => {
    const recipeForm = document.getElementById("recipe-form");
    const recipeList = document.getElementById("recipe-list");
    const searchBox = document.getElementById("search-box");
    const noRecipesMsg = document.getElementById("no-recipes");
    let recipes = [];
  
    recipeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("recipe-name").value;
      const ingredients = document.getElementById("recipe-ingredients").value;
      const method = document.getElementById("recipe-method").value;
      const recipe = { name, ingredients, method };
      recipes.push(recipe);
      renderRecipes();
      recipeForm.reset();
    });
  
    searchBox.addEventListener("input", () => {
      const searchTerm = searchBox.value.toLowerCase();
      const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm)
      );
      renderRecipes(filteredRecipes);
    });
  
    function deleteRecipe(index) {
      recipes.splice(index, 1);
      renderRecipes();
    }
  
    function renderRecipes(recipeArray = []) {
      recipeList.innerHTML = "";
      const recipesToRender = recipeArray.length ? recipeArray : recipes;
  
      if (recipesToRender.length > 0) {
        noRecipesMsg.style.display = "none";
        recipesToRender.forEach((recipe, index) => {
          const recipeItem = document.createElement("div");
          recipeItem.classList.add("recipe");
          const recipeContent = `
            <h3>${recipe.name}</h3>
            <ul>
              <li><strong>Ingredients:</strong> ${recipe.ingredients}</li>
              <li><strong>Method:</strong> ${recipe.method}</li>
            </ul>
            <button class="delete-btn" onclick="deleteRecipe(${index})">Delete</button>
          `;
          recipeItem.innerHTML = recipeContent;
          recipeList.appendChild(recipeItem);
        });
      } else {
        noRecipesMsg.style.display = "block";
      }
    }
  });
  
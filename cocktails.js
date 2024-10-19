const cocktails = {
    margarita: {
        name: "Margarita",
        ingredients: [
            "2 oz Tequila",
            "1 oz Lime juice",
            "1 oz Triple sec",
            "Salt for rimming",
        ],
        instructions: "Shake all ingredients with ice and strain into a salt-rimmed glass."
    },
    mojito: {
        name: "Mojito",
        ingredients: [
            "2 oz White rum",
            "1 oz Lime juice",
            "2 teaspoons Sugar",
            "Mint leaves",
            "Soda water",
        ],
        instructions: "Muddle mint leaves and sugar in a glass. Add lime juice and rum, then fill with soda water."
    },
    old_fashioned: {
        name: "Old Fashioned",
        ingredients: [
            "2 oz Bourbon",
            "1 Sugar cube",
            "2 dashes Angostura bitters",
            "Orange twist",
        ],
        instructions: "Muddle sugar and bitters, add bourbon, stir, and garnish with an orange twist."
    },
    pina_colada: {
        name: "Pina Colada",
        ingredients: [
            "2 oz White rum",
            "1 oz Coconut cream",
            "1 oz Heavy cream",
            "6 oz Fresh pineapple juice",
            "1/2 cup crushed ice",
        ],
        instructions: "Blend all ingredients until smooth, and serve in a chilled glass."
    }
};

document.getElementById('cocktail-select').addEventListener('change', function() {
    const selectedCocktail = this.value;
    const recipeContainer = document.getElementById('recipe-container');
    const cocktailName = document.getElementById('cocktail-name');
    const ingredientsList = document.getElementById('ingredients-list');
    const instructions = document.getElementById('instructions');

    if (selectedCocktail) {
        const cocktail = cocktails[selectedCocktail];
        cocktailName.textContent = cocktail.name;
        ingredientsList.innerHTML = cocktail.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        instructions.textContent = cocktail.instructions;

        recipeContainer.style.display = 'block';
    } else {
        recipeContainer.style.display = 'none';
    }
});

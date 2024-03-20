// script.js
function redirectToRandomCategory() {
    // Array of category short names
    var categories = ["Lunch", "Dinner", "Sushi", "Drinks"];
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * categories.length);
    // Get the random category short name
    var randomCategoryShortName = categories[randomIndex];
    // Redirect to the random category page
    $dc.loadMenuItems(randomCategoryShortName);
}

function updateColors() {
    var product = document.getElementById("product").value;
    var colors = [];

    // Define the colors for each product
    if (product === "Select Product") {
        colors = ["Select Color"];
    }
    else if (product === "BarterBee Caps") {
        colors = ["Neon Orange/ White/ Olive", "Red/ White/ Black"];
    }
    else if (product === "BarterBee Business Cards") {
        colors = ["Silver", "Gold", "Copper", "Magenta", "Teal"];
    }
    else if (product === "BarterBee Poster Printing") {
        colors = ["Cyan", "Lime", "Indigo", "Amber", "Crimson"];
    }
    else if (product === "BarterBee Pull-up Banners") {
        colors = ["Violet", "Saffron", "Azure", "Ruby", "Emerald"];
    }
    else if (product === "BarterBee Wedding Cards") {
        colors = ["Lavender", "Turquoise", "Coral", "Amethyst", "Sapphire"];
    }
    else if (product === "BarterBee Greeting Cards") {
        colors = ["Maroon", "Aquamarine", "Rose", "Gold", "Silver"];
    }
    else if (product === "BarterBee Mugs") {
        colors = ["Cobalt", "Platinum", "Pearl", "Ruby", "Jade"];
    }
    else if (product === "BarterBee Pen") {
        colors = ["Amber", "Bronze", "Copper", "Emerald", "Onyx"];
    }
    else if (product === "BarterBee Keychains") {
        colors = ["Crimson", "Cyan", "Magenta", "Lime", "Violet"];
    }
    else if (product === "BarterBee Refreshing Bottle") {
        colors = ["Saffron", "Azure", "Indigo", "Rose", "Gold"];
    }
    else if (product === "BarterBee Monkey Comforter") {
        colors = ["Platinum", "Pearl", "Turquoise", "Maroon", "Aquamarine"];
    }
    else if (product === "BarterBee Dragon Soft Toy") {
        colors = ["Ruby", "Jade", "Amethyst", "Sapphire", "Coral"];
    }
    else if (product === "BarterBee Shorts") {
        colors = ["Silver", "Gold", "Copper", "Magenta", "Teal"];
    }
    else if (product === "BarterBee Hat") {
        colors = ["Lime", "Violet", "Saffron", "Azure", "Cobalt"];
    }
    else if (product === "BarterBee Microfleece Jacket") {
        colors = ["Rose", "Gold", "Silver", "Crimson", "Cyan"];
    }
    else if (product === "BarterBee Allround Work Polo") {
        colors = ["Magenta", "Lime", "Violet", "Saffron", "Amber"];
    }
    else if (product === "BarterBee Women's Classic Polo") {
        colors = ["Indigo", "Amethyst", "Sapphire", "Coral", "Maroon"];
    }
    else if (product === "BarterBee Hooded Sweatshirts") {
        colors = ["Aquamarine", "Ruby", "Jade", "Pearl", "Turquoise"];
    }
    else if (product === "BarterBee Classic T-Shirts") {
        colors = ["Beige", "Black", "Bottle Green", "Brown", "Charcoal", "French Navy", "Heather Grey", "Hot Pink", "Kelly Green", "Maroon", "Military Green", "Navy", "Orange", "Purple", "Red", "Royal", "Sapphire Blue", "Sky", "White", "Yellow"];  }
    else if (product === "BarterBee Joggers") {
        colors = ["Violet", "Saffron", "Azure", "Cobalt", "Platinum"];
    }
    else if (product === "BarterBee SportsWear Jersey") {
        colors = ["Pearl", "Turquoise", "Maroon", "Aquamarine", "Rose"];
    }
    else if (product === "BarterBee Varsity Jackets") {
        colors = ["Jade", "Amethyst", "Sapphire", "Coral", "Gold"];
    }
    else if (product === "BarterBee Round Neck Oversized T-Shirts") {
        colors = ["Beige", "Black", "Bottle Green", "Brown", "Charcoal", "French Navy", "Heather Grey", "Hot Pink", "Kelly Green", "Maroon", "Military Green", "Navy", "Orange", "Purple", "Red", "Royal", "Sapphire Blue", "Sky", "White", "Yellow"];

    }
    // Add more if-else conditions for other products

    // Update the color options
    var colorSelect = document.getElementById("finish-color");
    colorSelect.innerHTML = "";
    for (var i = 0; i < colors.length; i++) {
        var option = document.createElement("option");
        option.text = colors[i];
        colorSelect.add(option);
    }
}
import colorCore = require('colorCore');

export interface IGroupColor {
    groupColor: string;
}

export interface IColorDescription {
    hex: colorCore.IHEX;
    name: string;
}

export interface IColor extends IColorDescription, IGroupColor { }

export var LISTOFCOLOR: IColor[] = [
    { "name": "Alice Blue", "hex": "#f0f8ff", "groupColor": "" },
    { "name": "Antique White", "hex": "#faebd7", "groupColor": "" },
    { "name": "Aqua", "hex": "#00ffff", "groupColor": "Cyan" },
    { "name": "Aquamarine", "hex": "#7fffd4", "groupColor": "Cyan" },
    { "name": "Azure", "hex": "#f0ffff", "groupColor": "Cyan" },
    { "name": "Beige", "hex": "#f5f5dc", "groupColor": "" },
    { "name": "Bisque", "hex": "#ffe4c4", "groupColor": "Brown" },
    { "name": "Black", "hex": "#000000", "groupColor": "" },
    { "name": "Blanched Almond", "hex": "#ffebcd", "groupColor": "Brown" },
    { "name": "Blue", "hex": "#0000ff", "groupColor": "Blue" },
    { "name": "Blue Violet", "hex": "#8a2be2", "groupColor": "Purple" },
    { "name": "Brown", "hex": "#a52a2a", "groupColor": "Brown" },
    { "name": "Burlywood", "hex": "#deb887", "groupColor": "Brown" },
    { "name": "Cadet Blue", "hex": "#5f9ea0", "groupColor": "Cyan" },
    { "name": "Chartreuse", "hex": "#7fff00", "groupColor": "Green" },
    { "name": "Chocolate", "hex": "#d2691e", "groupColor": "Brown" },
    { "name": "Coral", "hex": "#ff7f50", "groupColor": "Orange" },
    { "name": "Corn Flower Blue", "hex": "#6495ed", "groupColor": "Blue" },
    { "name": "Corn Silk", "hex": "#fff8dc", "groupColor": "Brown" },
    { "name": "Crimson", "hex": "#dc143c", "groupColor": "Red" },
    { "name": "Cyan", "hex": "#00ffff", "groupColor": "Cyan" },
    { "name": "Dark Blue", "hex": "#00008b", "groupColor": "Blue" },
    { "name": "Dark Cyan", "hex": "#008b8b", "groupColor": "Cyan" },
    { "name": "Dark Golden Rod", "hex": "#b8860b", "groupColor": "Brown" },
    { "name": "Dark Gray", "hex": "#a9a9a9", "groupColor": "" },
    { "name": "Dark Green", "hex": "#006400", "groupColor": "Green" },
    { "name": "Dark Grey", "hex": "#a9a9a9", "groupColor": "" },
    { "name": "Dark Khaki", "hex": "#bdb76b", "groupColor": "Yellow" },
    { "name": "Dark Magenta", "hex": "#8b008b", "groupColor": "Purple" },
    { "name": "Dark olive Green", "hex": "#556b2f", "groupColor": "Green" },
    { "name": "Dark orange", "hex": "#ff8c00", "groupColor": "Orange" },
    { "name": "Dark orchid", "hex": "#9932cc", "groupColor": "Purple" },
    { "name": "Dark red", "hex": "#8b0000", "groupColor": "Red" },
    { "name": "Dark Salmon", "hex": "#e9967a", "groupColor": "Red" },
    { "name": "Dark Sea Green", "hex": "#8fbc8f", "groupColor": "Green" },
    { "name": "Dark Slate Blue", "hex": "#483d8b", "groupColor": "Purple" },
    { "name": "Dark Slate gray", "hex": "#2f4f4f", "groupColor": "Green" },
    { "name": "Dark Slate grey", "hex": "#2f4f4f", "groupColor": "" },
    { "name": "Dark turquoise", "hex": "#00ced1", "groupColor": "Cyan" },
    { "name": "Dark violet", "hex": "#9400d3", "groupColor": "Purple" },
    { "name": "Deep pink", "hex": "#ff1493", "groupColor": "Pink" },
    { "name": "Deep skyBlue", "hex": "#00bfff", "groupColor": "Blue" },
    { "name": "Dim gray", "hex": "#696969", "groupColor": "" },
    { "name": "Dim grey", "hex": "#696969", "groupColor": "" },
    { "name": "Dodger Blue", "hex": "#1e90ff", "groupColor": "Blue" },
    { "name": "Firebrick", "hex": "#b22222", "groupColor": "Red" },
    { "name": "Floral White", "hex": "#fffaf0", "groupColor": "" },
    { "name": "Forest Green", "hex": "#228b22", "groupColor": "Green" },
    { "name": "Fuchsia", "hex": "#ff00ff", "groupColor": "Purple" },
    { "name": "Gainsboro", "hex": "#dcdcdc", "groupColor": "" },
    { "name": "Ghostwhite", "hex": "#f8f8ff", "groupColor": "" },
    { "name": "Gold", "hex": "#ffd700", "groupColor": "Yellow" },
    { "name": "Goldenrod", "hex": "#daa520", "groupColor": "Brown" },
    { "name": "Gray", "hex": "#808080", "groupColor": "" },
    { "name": "Green", "hex": "#008000", "groupColor": "Green" },
    { "name": "Greenyellow", "hex": "#adff2f", "groupColor": "Green" },
    { "name": "Grey", "hex": "#808080", "groupColor": "" },
    { "name": "Honeydew", "hex": "#f0fff0", "groupColor": "" },
    { "name": "Hot Pink", "hex": "#ff69b4", "groupColor": "Pink" },
    { "name": "Indian Red", "hex": "#cd5c5c", "groupColor": "Red" },
    { "name": "Indigo", "hex": "#4b0082", "groupColor": "Purple" },
    { "name": "Ivory", "hex": "#fffff0", "groupColor": "" },
    { "name": "Khaki", "hex": "#f0e68c", "groupColor": "Yellow" },
    { "name": "Lavender ", "hex": "#e6e6fa", "groupColor": "Purple" },
    { "name": "Lavender Blush", "hex": "#fff0f5", "groupColor": "Pink" },
    { "name": "Lawn Green", "hex": "#7cfc00", "groupColor": "Green" },
    { "name": "Lemon Chiffon", "hex": "#fffacd", "groupColor": "Yellow" },
    { "name": "Light Blue", "hex": "#add8e6", "groupColor": "Blue" },
    { "name": "Light Coral", "hex": "#f08080", "groupColor": "Red" },
    { "name": "Light Cyan", "hex": "#e0ffff", "groupColor": "Cyan" },
    { "name": "Light Goldenrodyellow", "hex": "#fafad2", "groupColor": "Yellow" },
    { "name": "Light Gray", "hex": "#d3d3d3", "groupColor": "" },
    { "name": "Light Green", "hex": "#90ee90", "groupColor": "Green" },
    { "name": "Light Grey", "hex": "#d3d3d3", "groupColor": "" },
    { "name": "Light Pink", "hex": "#ffb6c1", "groupColor": "Pink" },
    { "name": "Light Salmon", "hex": "#ffa07a", "groupColor": "Red" },
    { "name": "Light Sea  Green", "hex": "#20b2aa", "groupColor": "Cyan" },
    { "name": "Light SkyBlue", "hex": "#87cefa", "groupColor": "Blue" },
    { "name": "Light Slate gray", "hex": "#778899", "groupColor": "" },
    { "name": "Light Slate grey", "hex": "#778899", "groupColor": "" },
    { "name": "Light steelBlue", "hex": "#b0c4de", "groupColor": "Blue" },
    { "name": "Light Yellow", "hex": "#ffffe0", "groupColor": "Yellow" },
    { "name": "Lime", "hex": "#00ff00", "groupColor": "Green" },
    { "name": "Lime Green", "hex": "#32cd32", "groupColor": "Green" },
    { "name": "Linen", "hex": "#faf0e6", "groupColor": "" },
    { "name": "Magenta", "hex": "#ff00ff", "groupColor": "Purple" },
    { "name": "Maroon", "hex": "#800000", "groupColor": "Brown" },
    { "name": "Medium Aquamarine", "hex": "#66cdaa", "groupColor": "Cyan" },
    { "name": "Medium Blue", "hex": "#0000cd", "groupColor": "Blue" },
    { "name": "Medium Orchid", "hex": "#ba55d3", "groupColor": "Purple" },
    { "name": "Medium Purple", "hex": "#9370db", "groupColor": "Purple" },
    { "name": "Medium Sea  Green", "hex": "#3cb371", "groupColor": "" },
    { "name": "Medium Slate Blue", "hex": "#7b68ee", "groupColor": "Purple" },
    { "name": "Medium Spring Green", "hex": "#00fa9a", "groupColor": "Green" },
    { "name": "Medium Turquoise", "hex": "#48d1cc", "groupColor": "Cyan" },
    { "name": "medium Violet Red", "hex": "#c71585", "groupColor": "Pink" },
    { "name": "Midnight Blue", "hex": "#191970", "groupColor": "Blue" },
    { "name": "Mint Cream", "hex": "#f5fffa", "groupColor": "" },
    { "name": "Misty Rose", "hex": "#ffe4e1", "groupColor": "Pink" },
    { "name": "Moccasin", "hex": "#ffe4b5", "groupColor": "Yellow" },
    { "name": "Navajo White", "hex": "#ffdead", "groupColor": "Brown" },
    { "name": "Navy", "hex": "#000080", "groupColor": "Blue" },
    { "name": "Oldlace", "hex": "#fdf5e6", "groupColor": "" },
    { "name": "Olive", "hex": "#808000", "groupColor": "Green" },
    { "name": "Olive Drab", "hex": "#6b8e23", "groupColor": "Green" },
    { "name": "Orange", "hex": "#ffa500", "groupColor": "Orange" },
    { "name": "Orange Red", "hex": "#ff4500", "groupColor": "Orange" },
    { "name": "Orchid", "hex": "#da70d6", "groupColor": "Purple" },
    { "name": "Pale Golden Rod", "hex": "#eee8aa", "groupColor": "Yellow" },
    { "name": "Pale Green", "hex": "#98fb98", "groupColor": "Green" },
    { "name": "Pale Turquoise", "hex": "#afeeee", "groupColor": "Cyan" },
    { "name": "Pale Violet Red", "hex": "#db7093", "groupColor": "Pink" },
    { "name": "Papaya Whip", "hex": "#ffefd5", "groupColor": "Yellow" },
    { "name": "Peach Puff", "hex": "#ffdab9", "groupColor": "Yellow" },
    { "name": "Peru", "hex": "#cd853f", "groupColor": "Brown" },
    { "name": "Pink", "hex": "#ffc0cb", "groupColor": "Pink" },
    { "name": "Plum", "hex": "#dda0dd", "groupColor": "Purple" },
    { "name": "Powder Blue", "hex": "#b0e0e6", "groupColor": "Blue" },
    { "name": "Purple", "hex": "#800080", "groupColor": "Purple" },
    { "name": "Rebecca Purple", "hex": "#663399", "groupColor": "Purple" },
    { "name": "Red", "hex": "#ff0000", "groupColor": "Red" },
    { "name": "Rosy Brown", "hex": "#bc8f8f", "groupColor": "Brown" },
    { "name": "Royal Blue", "hex": "#4169e1", "groupColor": "Blue" },
    { "name": "Saddle Brown", "hex": "#8b4513", "groupColor": "Brown" },
    { "name": "Salmon", "hex": "#fa8072", "groupColor": "Red" },
    { "name": "Sandy Brown", "hex": "#f4a460", "groupColor": "Brown" },
    { "name": "Sea Green", "hex": "#2e8b57", "groupColor": "Green" },
    { "name": "Sea Shell", "hex": "#fff5ee", "groupColor": "" },
    { "name": "Sienna", "hex": "#a0522d", "groupColor": "Brown" },
    { "name": "Silver", "hex": "#c0c0c0", "groupColor": "" },
    { "name": "Sky Blue", "hex": "#87ceeb", "groupColor": "Blue" },
    { "name": "Slate Blue", "hex": "#6a5acd", "groupColor": "Purple" },
    { "name": "Slate Gray", "hex": "#708090", "groupColor": "" },
    { "name": "Snow", "hex": "#fffafa", "groupColor": "" },
    { "name": "Spring Green", "hex": "#00ff7f", "groupColor": "Green" },
    { "name": "Steel Blue", "hex": "#4682b4", "groupColor": "Blue" },
    { "name": "Tan", "hex": "#d2b48c", "groupColor": "Brown" },
    { "name": "Teal", "hex": "#008080", "groupColor": "Cyan" },
    { "name": "Thistle", "hex": "#d8bfd8", "groupColor": "Purple" },
    { "name": "Tomato", "hex": "#ff6347", "groupColor": "Orange" },
    { "name": "Turquoise", "hex": "#40e0d0", "groupColor": "Cyan" },
    { "name": "Violet", "hex": "#ee82ee", "groupColor": "Purple" },
    { "name": "Wheat", "hex": "#f5deb3", "groupColor": "Brown" },
    { "name": "White", "hex": "#ffffff", "groupColor": "" },
    { "name": "Whitesmoke", "hex": "#f5f5f5", "groupColor": "" },
    { "name": "Yellow", "hex": "#ffff00", "groupColor": "Yellow" },
    { "name": "Yellow Green", "hex": "#9acd32", "groupColor": "Green" }
];

export function getColorFromName(colorName: string): IColor {
    var hexNumber: IColor = undefined;

    LISTOFCOLOR.forEach(function(value, index) {
        if (colorName.toLowerCase() === value.name.toLowerCase()) {
            hexNumber = value;
        }
    });

    return hexNumber;
}

export function getColorUsingIndex(index: number): IColor {
    return LISTOFCOLOR[index];
}

export function getLenghtColor(): number {
    return LISTOFCOLOR.length;
}

var groupsColor: string[] = [
    'Pink',
    'Purple',
    'Red',
    'Orange',
    'Yellow',
    'Brown',
    'Green',
    'Cyan Colors',
    'Blue Colors',
    'Gray Colors',
    'White Colors'
];



export function getGroupsColor(): string[] {
    return groupsColor;
}

export function getColorsInGroupsColors(groupName:string): IColor[] {
    var newObject = [];

    LISTOFCOLOR.forEach(function(color, index) {
        if (groupName===color.groupColor){
            newObject.push(color);
        }
    })

    return newObject;
}




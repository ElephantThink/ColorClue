module colorList {

    export interface IGroupColor {
        groupColor: string;
    }

    export interface IColorDescription {
        hex: IHEX;
        name: string;
    }

    export interface IColor extends IColorDescription, IGroupColor { }

    export var LISTOFCOLOR: IColor[] = [
        { "name": "Alice Blue", "hex": "#f0f8ff", "groupColor": "" },
        { "name": "Antique White", "hex": "#faebd7", "groupColor": "" },
        { "name": "Aqua", "hex": "#00ffff", "groupColor": "" },
        { "name": "Aquamarine", "hex": "#7fffd4", "groupColor": "" },
        { "name": "Azure", "hex": "#f0ffff", "groupColor": "" },
        { "name": "Beige", "hex": "#f5f5dc", "groupColor": "" },
        { "name": "Bisque", "hex": "#ffe4c4", "groupColor": "" },
        { "name": "Black", "hex": "#000000", "groupColor": "" },
        { "name": "Blanched Almond", "hex": "#ffebcd", "groupColor": "" },
        { "name": "Blue", "hex": "#0000ff", "groupColor": "" },
        { "name": "Blue Violet", "hex": "#8a2be2", "groupColor": "" },
        { "name": "Brown", "hex": "#a52a2a", "groupColor": "" },
        { "name": "Burlywood", "hex": "#deb887", "groupColor": "" },
        { "name": "Cadet Blue", "hex": "#5f9ea0", "groupColor": "" },
        { "name": "Chartreuse", "hex": "#7fff00", "groupColor": "" },
        { "name": "Chocolate", "hex": "#d2691e", "groupColor": "" },
        { "name": "Coral", "hex": "#ff7f50", "groupColor": "" },
        { "name": "Corn Flower Blue", "hex": "#6495ed", "groupColor": "" },
        { "name": "Corn Silk", "hex": "#fff8dc", "groupColor": "" },
        { "name": "Crimson", "hex": "#dc143c", "groupColor": "" },
        { "name": "Cyan", "hex": "#00ffff", "groupColor": "" },
        { "name": "Dark Blue", "hex": "#00008b", "groupColor": "" },
        { "name": "Dark Cyan", "hex": "#008b8b", "groupColor": "" },
        { "name": "Dark Golden Rod", "hex": "#b8860b", "groupColor": "" },
        { "name": "Dark Gray", "hex": "#a9a9a9", "groupColor": "" },
        { "name": "Dark Green", "hex": "#006400", "groupColor": "" },
        { "name": "Dark Grey", "hex": "#a9a9a9", "groupColor": "" },
        { "name": "Dark Khaki", "hex": "#bdb76b", "groupColor": "" },
        { "name": "Dark Magenta", "hex": "#8b008b", "groupColor": "" },
        { "name": "Dark olive Green", "hex": "#556b2f", "groupColor": "" },
        { "name": "Dark orange", "hex": "#ff8c00", "groupColor": "" },
        { "name": "Dark orchid", "hex": "#9932cc", "groupColor": "" },
        { "name": "Dark red", "hex": "#8b0000", "groupColor": "" },
        { "name": "Dark Salmon", "hex": "#e9967a", "groupColor": "" },
        { "name": "Dark Sea Green", "hex": "#8fbc8f", "groupColor": "" },
        { "name": "Dark Slate Blue", "hex": "#483d8b", "groupColor": "" },
        { "name": "Dark Slate gray", "hex": "#2f4f4f", "groupColor": "" },
        { "name": "Dark Slate grey", "hex": "#2f4f4f", "groupColor": "" },
        { "name": "Dark turquoise", "hex": "#00ced1", "groupColor": "" },
        { "name": "Dark violet", "hex": "#9400d3", "groupColor": "" },
        { "name": "Deep pink", "hex": "#ff1493", "groupColor": "" },
        { "name": "Deep skyBlue", "hex": "#00bfff", "groupColor": "" },
        { "name": "Dim gray", "hex": "#696969", "groupColor": "" },
        { "name": "Dim grey", "hex": "#696969", "groupColor": "" },
        { "name": "Dodger Blue", "hex": "#1e90ff", "groupColor": "" },
        { "name": "Firebrick", "hex": "#b22222", "groupColor": "" },
        { "name": "Floral White", "hex": "#fffaf0", "groupColor": "" },
        { "name": "Forest Green", "hex": "#228b22", "groupColor": "" },
        { "name": "Fuchsia", "hex": "#ff00ff", "groupColor": "" },
        { "name": "Gainsboro", "hex": "#dcdcdc", "groupColor": "" },
        { "name": "Ghostwhite", "hex": "#f8f8ff", "groupColor": "" },
        { "name": "Gold", "hex": "#ffd700", "groupColor": "" },
        { "name": "Goldenrod", "hex": "#daa520", "groupColor": "" },
        { "name": "Gray", "hex": "#808080", "groupColor": "" },
        { "name": "Green", "hex": "#008000", "groupColor": "" },
        { "name": "Greenyellow", "hex": "#adff2f", "groupColor": "" },
        { "name": "Grey", "hex": "#808080", "groupColor": "" },
        { "name": "Honeydew", "hex": "#f0fff0", "groupColor": "" },
        { "name": "Hot Pink", "hex": "#ff69b4", "groupColor": "" },
        { "name": "Indian Red", "hex": "#cd5c5c", "groupColor": "" },
        { "name": "Indigo", "hex": "#4b0082", "groupColor": "" },
        { "name": "Ivory", "hex": "#fffff0", "groupColor": "" },
        { "name": "Khaki", "hex": "#f0e68c", "groupColor": "" },
        { "name": "Lavender ", "hex": "#e6e6fa", "groupColor": "" },
        { "name": "Lavender Blush", "hex": "#fff0f5", "groupColor": "" },
        { "name": "Lawn Green", "hex": "#7cfc00", "groupColor": "" },
        { "name": "Lemon Chiffon", "hex": "#fffacd", "groupColor": "" },
        { "name": "Light Blue", "hex": "#add8e6", "groupColor": "" },
        { "name": "Light Coral", "hex": "#f08080", "groupColor": "" },
        { "name": "Light Cyan", "hex": "#e0ffff", "groupColor": "" },
        { "name": "Light Goldenrodyellow", "hex": "#fafad2", "groupColor": "" },
        { "name": "Light Gray", "hex": "#d3d3d3", "groupColor": "" },
        { "name": "Light Green", "hex": "#90ee90", "groupColor": "" },
        { "name": "Light Grey", "hex": "#d3d3d3", "groupColor": "" },
        { "name": "Light Pink", "hex": "#ffb6c1", "groupColor": "" },
        { "name": "Light Salmon", "hex": "#ffa07a", "groupColor": "" },
        { "name": "Light Sea  Green", "hex": "#20b2aa", "groupColor": "" },
        { "name": "Light SkyBlue", "hex": "#87cefa", "groupColor": "" },
        { "name": "Light Slate gray", "hex": "#778899", "groupColor": "" },
        { "name": "Light Slate grey", "hex": "#778899", "groupColor": "" },
        { "name": "Light steelBlue", "hex": "#b0c4de", "groupColor": "" },
        { "name": "Light Yellow", "hex": "#ffffe0", "groupColor": "" },
        { "name": "Lime", "hex": "#00ff00", "groupColor": "" },
        { "name": "Lime Green", "hex": "#32cd32", "groupColor": "" },
        { "name": "Linen", "hex": "#faf0e6", "groupColor": "" },
        { "name": "Magenta", "hex": "#ff00ff", "groupColor": "" },
        { "name": "Maroon", "hex": "#800000", "groupColor": "" },
        { "name": "Medium Aquamarine", "hex": "#66cdaa", "groupColor": "" },
        { "name": "Medium Blue", "hex": "#0000cd", "groupColor": "" },
        { "name": "Medium Orchid", "hex": "#ba55d3", "groupColor": "" },
        { "name": "Medium Purple", "hex": "#9370db", "groupColor": "" },
        { "name": "Medium Sea  Green", "hex": "#3cb371", "groupColor": "" },
        { "name": "Medium Slate Blue", "hex": "#7b68ee", "groupColor": "" },
        { "name": "Medium Spring Green", "hex": "#00fa9a", "groupColor": "" },
        { "name": "Medium Turquoise", "hex": "#48d1cc", "groupColor": "" },
        { "name": "medium Violet Red", "hex": "#c71585", "groupColor": "" },
        { "name": "Midnight Blue", "hex": "#191970", "groupColor": "" },
        { "name": "Mint Cream", "hex": "#f5fffa", "groupColor": "" },
        { "name": "Misty Rose", "hex": "#ffe4e1", "groupColor": "" },
        { "name": "Moccasin", "hex": "#ffe4b5", "groupColor": "" },
        { "name": "Navajo White", "hex": "#ffdead", "groupColor": "" },
        { "name": "Navy", "hex": "#000080", "groupColor": "" },
        { "name": "Oldlace", "hex": "#fdf5e6", "groupColor": "" },
        { "name": "Olive", "hex": "#808000", "groupColor": "" },
        { "name": "Olive Drab", "hex": "#6b8e23", "groupColor": "" },
        { "name": "Orange", "hex": "#ffa500", "groupColor": "" },
        { "name": "Orange Red", "hex": "#ff4500", "groupColor": "" },
        { "name": "Orchid", "hex": "#da70d6", "groupColor": "" },
        { "name": "Pale Golden Rod", "hex": "#eee8aa", "groupColor": "" },
        { "name": "Pale Green", "hex": "#98fb98", "groupColor": "" },
        { "name": "Pale Turquoise", "hex": "#afeeee", "groupColor": "" },
        { "name": "Pale Violet Red", "hex": "#db7093", "groupColor": "" },
        { "name": "Papaya Whip", "hex": "#ffefd5", "groupColor": "" },
        { "name": "Peach Puff", "hex": "#ffdab9", "groupColor": "" },
        { "name": "Peru", "hex": "#cd853f", "groupColor": "" },
        { "name": "Pink", "hex": "#ffc0cb", "groupColor": "" },
        { "name": "Plum", "hex": "#dda0dd", "groupColor": "" },
        { "name": "Powder Blue", "hex": "#b0e0e6", "groupColor": "" },
        { "name": "Purple", "hex": "#800080", "groupColor": "" },
        { "name": "Rebecca Purple", "hex": "#663399", "groupColor": "" },
        { "name": "Red", "hex": "#ff0000", "groupColor": "" },
        { "name": "Rosy Brown", "hex": "#bc8f8f", "groupColor": "" },
        { "name": "Royal Blue", "hex": "#4169e1", "groupColor": "" },
        { "name": "Saddle Brown", "hex": "#8b4513", "groupColor": "" },
        { "name": "Salmon", "hex": "#fa8072", "groupColor": "" },
        { "name": "Sandy Brown", "hex": "#f4a460", "groupColor": "" },
        { "name": "Sea Green", "hex": "#2e8b57", "groupColor": "" },
        { "name": "Sea Shell", "hex": "#fff5ee", "groupColor": "" },
        { "name": "Sienna", "hex": "#a0522d", "groupColor": "" },
        { "name": "Silver", "hex": "#c0c0c0", "groupColor": "" },
        { "name": "Sky Blue", "hex": "#87ceeb", "groupColor": "" },
        { "name": "Slate Blue", "hex": "#6a5acd", "groupColor": "" },
        { "name": "Slate Gray", "hex": "#708090", "groupColor": "" },
        { "name": "Snow", "hex": "#fffafa", "groupColor": "" },
        { "name": "Spring Green", "hex": "#00ff7f", "groupColor": "" },
        { "name": "Steel Blue", "hex": "#4682b4", "groupColor": "" },
        { "name": "Tan", "hex": "#d2b48c", "groupColor": "" },
        { "name": "Teal", "hex": "#008080", "groupColor": "" },
        { "name": "Thistle", "hex": "#d8bfd8", "groupColor": "" },
        { "name": "Tomato", "hex": "#ff6347", "groupColor": "" },
        { "name": "Turquoise", "hex": "#40e0d0", "groupColor": "" },
        { "name": "Violet", "hex": "#ee82ee", "groupColor": "" },
        { "name": "Wheat", "hex": "#f5deb3", "groupColor": "" },
        { "name": "White", "hex": "#ffffff", "groupColor": "" },
        { "name": "Whitesmoke", "hex": "#f5f5f5", "groupColor": "" },
        { "name": "Yellow", "hex": "#ffff00", "groupColor": "" },
        { "name": "Yellow Green", "hex": "#9acd32", "groupColor": "" }
    ];

    export function getColorFromName(colorName: string): colorList.IColor {
        var hexNumber: colorList.IColor = undefined;

        colorList.LISTOFCOLOR.forEach(function(value, index) {
            if (colorName.toLowerCase() === value.name.toLowerCase()) {
                hexNumber = value;
            }
        });

        return hexNumber;
    }

    export function getColorUsingIndex(index: number): colorList.IColor {
        return colorList.LISTOFCOLOR[index];
    }

    export function getLenghtColor(): number {
        return colorList.LISTOFCOLOR.length;
    }

    export function getGroupsColor(): string[] {
        return [];
    }

    export function getColorsInGroupsColors(): colorList.IColor[] {
        return [];
    }

}




export interface PaletteColor {
    name: String;
    hex: String;
}

export interface Palette {
    name: String;
    slug: String;
    colors: PaletteColor[];
}

export interface PaletteState {
    palettes: Palette[];
}

const PALETTE_COLOR_OF_THE_YEAR: Palette = {
    name: 'Color Of The Year',
    slug: 'coty',
    colors: [
        { name: 'Greenery', hex: '#88B04B' },
        { name: 'Serenity', hex: '#93A9D1' },
        { name: 'Rose Quartz', hex: '#F7CACA' },
        { name: 'Marsala', hex: '#964F4C' },
        { name: 'Radiant Orchid', hex: '#AD5E99' },
        { name: 'Emerald', hex: '#009473' },
        { name: 'Tangerine Tango', hex: '#DD4124' },
        { name: 'Honeysuckle', hex: '#D94F70' },
        { name: 'Turquoise', hex: '#45B5AA' },
        { name: 'Mimosa', hex: '#F0C05A' },
        { name: 'Blue Iris', hex: '#5A5B9F' },
        { name: 'Chili Pepper', hex: '#9B1B30' },
        { name: 'Sand Dollar', hex: '#DECDBE' },
        { name: 'Blue Turquoise', hex: '#53B0AE' },
        { name: 'Tigerlily', hex: '#E2583E' },
        { name: 'Aqua Sky', hex: '#7BC4C4' },
        { name: 'True Red', hex: '#BF1932' },
        { name: 'Fuchsia Rose', hex: '#C74375' },
    ],
};
const PALETTE_FLAT_UI: Palette = {
    name: 'Flat UI',
    slug: 'flat-ui',
    colors: [
        { name: 'turquoise', hex: '#1abc9c' },
        { name: 'green sea', hex: '#16a085' },
        { name: 'emerald', hex: '#2ecc71' },
        { name: 'nephritis', hex: '#27ae60' },
        { name: 'peter river', hex: '#3498db' },
        { name: 'belize hole', hex: '#2980b9' },
        { name: 'amethyst', hex: '#9b59b6' },
        { name: 'wisteria', hex: '#8e44ad' },
        { name: 'wet asphalt', hex: '#34495e' },
        { name: 'midnight blue', hex: '#2c3e50' },
        { name: 'sunflower', hex: '#f1c40f' },
        { name: 'orange', hex: '#f39c12' },
        { name: 'carrot', hex: '#e67e22' },
        { name: 'pumpkin', hex: '#d35400' },
        { name: 'alizarin', hex: '#e74c3c' },
        { name: 'pomegranate', hex: '#c0392b' },
        { name: 'clouds', hex: '#ecf0f1' },
        { name: 'silver', hex: '#bdc3c7' },
        { name: 'concrete', hex: '#95a5a6' },
        { name: 'asbestos', hex: '#7f8c8d' },
    ],
};
const PALETTE_MATERIAL: Palette = {
    name: 'Material',
    slug: 'material',
    colors: [
        { name: 'Red', hex: '#F44336' },
        { name: 'Pink', hex: '#E91E63' },
        { name: 'Purple', hex: '#9C27B0' },
        { name: 'Deep Purple', hex: '#673AB7' },
        { name: 'Indigo', hex: '#3F51B5' },
        { name: 'Blue', hex: '#2196F3' },
        { name: 'Light Blue', hex: '#03A9F4' },
        { name: 'Cyan', hex: '#00BCD4' },
        { name: 'Green', hex: '#4CAF50' },
        { name: 'Light Green', hex: '#8BC34A' },
        { name: 'Lime', hex: '#CDDC39' },
        { name: 'Yellow', hex: '#FFEB3B' },
        { name: 'Amber', hex: '#FFC107' },
        { name: 'Orange', hex: '#FF9800' },
        { name: 'Deep Orange', hex: '#FF5722' },
        { name: 'Brown', hex: '#795548' },
        { name: 'Grey', hex: '#9E9E9E' },
        { name: 'Blue Grey', hex: '#607D8B' },
        { name: 'Black', hex: '#000000' },
        { name: 'White', hex: '#FFFFFF' },
    ],
};
const PALETTE_METRO: Palette = {
    name: 'Metro UI',
    slug: 'metro',
    colors: [
        { name: 'Light Green', hex: '#99b433' },
        { name: 'Green', hex: '#00a300' },
        { name: 'Dark Green', hex: '#1e7145' },
        { name: 'Magenta', hex: '#ff0097' },
        { name: 'Light Purple', hex: '#9f00a7' },
        { name: 'Purple', hex: '#7e3878' },
        { name: 'Dark Purple', hex: '#603cba' },
        { name: 'Darken', hex: '#1d1d1d' },
        { name: 'Teal', hex: '#00aba9' },
        { name: 'Light Blue', hex: '#eff4ff' },
        { name: 'Blue', hex: '#2d89ef' },
        { name: 'Dark Blue', hex: '#2b5797' },
        { name: 'Yellow', hex: '#ffc40d' },
        { name: 'Orange', hex: '#e3a21a' },
        { name: 'Dark Orange', hex: '#da532c' },
        { name: 'Red', hex: '#ee1111' },
        { name: 'Dark Red', hex: '#b91d47' },
        { name: 'White', hex: '#FFFFFF' },
    ],
};
const PALETTE_SLACK: Palette = {
    name: 'Slack',
    slug: 'slack',
    colors: [
        { name: 'Green', hex: '#3EB890' },
        { name: 'Blue', hex: '#70CADB' },
        { name: 'Gold', hex: '#E8A723' },
        { name: 'Rose', hex: '#E01765' },
        { name: 'Dark Purple', hex: '#443642' },
    ],
};

export const DEFAULT_PALETTE_STATE: PaletteState = {
    palettes: [
        PALETTE_COLOR_OF_THE_YEAR,
        PALETTE_FLAT_UI,
        PALETTE_MATERIAL,
        PALETTE_METRO,
        PALETTE_SLACK,
    ],
};

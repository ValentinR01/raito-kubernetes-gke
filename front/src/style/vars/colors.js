const general = {
    // PRIMARY
    primary: '#97a9bb',
    primaryHover: '#5c9dbc',
    primaryActive: '#417fbc',
    primaryDisabled: '#beced5',
    primaryTransparent: '#1cc6d900',

    // SECONDARY
    secondary: '#1a1c2f',
    secondaryHover: '#3c4e66',
    secondaryActive: '#0b4a9c',
    secondaryDisabled: '#404955',

    // TERRA
    terra: '#a44d4d',
    terraHover: '#ce6060',
    terraActive: '#cf3535',
    terraDisabled: '#ce6f6f',

    // GENERALS
    vanta: '#000',
    black: '#222',
    nero: '#333',
    davy: '#555',
    silver: '#7f7f7f',
    chalice: '#b1b1b1',
    grey: '#d3d3d3',
    egg: '#f0f0f0',
    cream: '#f3edd7',
    lightCream: '#faf5e2',
    white: '#fff',

    // INFO STATE
    info: '#5490FA',
    infoHover: '#325696',
    infoActive: '#B0CCFD',
    infoDisabled: '#5490FA',

    // VALID STATE
    valid: '#63E3A3',
    validHover: '#25D07A',
    validActive: '#A8F0CC',
    validDisabled: '#63E3A3',

    // ALERT STATE
    alert: '#F8CA1A',
    alertHover: '#DAAF07',
    alertActive: '#F9D74D',
    alertDisabled: '#F8CA1A',

    // ERROR STATE
    error: '#EC5A54',
    errorHover: '#E72923',
    errorActive: '#F1827E',
    errorDisabled: '#EC5A54',

    // COLORS - FUNCTIONS
    draco: '#39ffab',
    cepheus: '#61d368',
    lynx: '#0081af',
    leo: '#ff8559',
    serpens: '#ed68b5',
    crux: '#a161d5',
};

export const themeColorLight = {
    ...general,

    // Transparence here for safari's sake
    transparent: '#fff0',
    inputBgColorTransparent: '#fff0',
    inputBorderColorTransparent: '#d3d3d300',

    // TERTIARY
    tertiary: general.nero,
    tertiaryHover: general.vanta,
    tertiaryActive: general.vanta,
    tertiaryDisabled: general.nero,

    // Main colors
    mainButtonText: general.black,
    mainFilledButtonText: general.white,
    mainBgColor: general.egg,
    mainFontColor: general.nero,
    mainFontHoverColor: general.vanta,
    mainFocusColor: general.primary,

    // Input colors
    inputBgColor: general.white,
    inputBorderColor: general.grey,
    inputActiveColor: general.chalice,
    segmentedControlBorderColor: general.davy,
    segmentedControlFontColor: general.nero,

    // Toolbar colors
    toolbarBgColor: general.vanta,
    toolbarBgColorHover: general.nero,
    toolbarFontColor: general.white,

    // Grey Icons Color
    greyIconColor: general.silver,
    greyIconColorHover: general.davy,
    greyIconColorActive: general.grey,

    selectionColor: general.primaryActive,
};

export const themeColorDark = {
    ...general,

    // Transparence here for safari's sake
    transparent: '#0000',
    inputBgColorTransparent: '#3330',
    inputBorderColorTransparent: '#5550',

    // TERTIARY
    tertiary: general.white,
    tertiaryHover: general.egg,
    tertiaryActive: general.egg,
    tertiaryDisabled: general.white,

    // Main colors
    mainButtonText: general.white,
    mainFilledButtonText: general.black,
    mainBgColor: general.black,
    mainFontColor: general.white,
    mainFontHoverColor: general.egg,
    mainFocusColor: general.primary,

    // Input colors
    inputBgColor: general.nero,
    inputBorderColor: general.davy,
    inputActiveColor: general.silver,
    segmentedControlBorderColor: general.silver,
    segmentedControlFontColor: general.egg,

    // Toolbar colors
    toolbarBgColor: general.white,
    toolbarBgColorHover: general.grey,
    toolbarFontColor: general.nero,

    // Grey Icons Color
    greyIconColor: general.silver,
    greyIconColorHover: general.grey,
    greyIconColorActive: general.davy,

    selectionColor: general.primaryHover,
};

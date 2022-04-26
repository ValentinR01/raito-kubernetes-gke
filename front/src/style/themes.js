import themeFonts from './vars/fonts';
import { themeColorDark, themeColorLight } from './vars/colors';

const common = {
    fonts: { ...themeFonts },
};

export const light = {
    ...common,
    colors: { ...themeColorLight },
};

export const dark = {
    ...common,
    colors: { ...themeColorDark },
};

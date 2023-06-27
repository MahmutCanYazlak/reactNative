import { Dimensions } from "react-native";


export const palette = {
    primary: '#6a5adf',
    primaryLight: '#dddaf9',
    primaryDark: '#3f37c9',
    secondary: '#FFC107',
    secondaryLight: '#FFECB3',
    secondaryDark: '#FFA000',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#9E9E9E',
    grayLight: '#EEEEEE',
    grayDark: '#212121',
    error: '#D32F2F',
    errorLight: '#FFCDD2',
    errorDark: '#B71C1C',
    warning: '#FFA000',
    warningLight: '#FFECB3',
    warningDark: '#FF6F00',
    info: '#1976D2',
    infoLight: '#BBDEFB',
    infoDark: '#0D47A1',
    success: '#388E3C',
    successLight: '#C8E6C9',
    successDark: '#1B5E20',
    first: '#fed130',
    second: '#fd9727',
    third: '#b9bbc1',
};
export const colors = {
    primary: palette.primary,
    primaryLight: palette.primaryLight,
    primaryDark: palette.primaryDark,
    secondary: palette.secondary,
    secondaryLight: palette.secondaryLight,
    secondaryDark: palette.secondaryDark,
    white: palette.white,
    black: palette.black,
    gray: palette.gray,
    grayLight: palette.grayLight,
    grayDark: palette.grayDark,
    error: palette.error,
    errorLight: palette.errorLight,
    errorDark: palette.errorDark,
    warning: palette.warning,
    warningLight: palette.warningLight,
    warningDark: palette.warningDark,
    info: palette.info,
    infoLight: palette.infoLight,
    infoDark: palette.infoDark,
    success: palette.success,
    successLight: palette.successLight,
    successDark: palette.successDark,
    first: palette.first,
    second: palette.second,
    third: palette.third,
};

export const dimensions = Dimensions.get('screen');
export const dWidth = Dimensions.get('screen').width;
export const dHeight = Dimensions.get('screen').height;

const theme = { palette, colors, dimensions, dWidth, dHeight };

export default theme;
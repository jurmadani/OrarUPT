import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get('screen');

export const COLORS = {
    primary: '#f52d56',
    title: '#072F4A',
    white: '#FFFFFF',
    lightGrey: '#D3D6D6',
    grey: '#C1C0C9',
    blue: '#087BB6',
    yellow: '#F4D03F',
    purple: '#2E3192',

};

export const SIZES = {
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,

    width,
    height,
}
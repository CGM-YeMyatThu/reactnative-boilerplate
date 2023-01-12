import { Dimensions } from "react-native";

export const BASE_URL = "https://eg.com/api/"

export const Color = {
    primary: "",
    primaryLight: '',
    statusBar: '',
    danger: ''
}

export const Device = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    isTablet: Dimensions.get("window").width > 600
}
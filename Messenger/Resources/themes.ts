import { createContext } from "react";

export const themes = {
  light: {
    mainColor: "black",
    background: "#D7B168",
    card: "string",
    text: "black",
    border: "black",
    notification: "black",
    header_and_footer_background: "rgba(255, 255, 255, 0.7)",
    big_text: "black",
    statusbar: "dark-content",
    backgroundChatGradient: {
      first: "#D7B168",
      second: "#D783FF",
    },
    backgroundGradient: {
      first: "#cf9b95",
      second: "#c98bb8",
      third: "#c37adb",
    },
    header: {
      backgroundGrad1: "#cf9b95",
      backgroundGrad2: "#c98bb8",
      backgroundGrad3: "#c37adb",
      headerPrimaryContent: "#2B1D1D",
    },
    transparentBtn: {
      backgroundColor: "white",
      zIndex: -1,
      opacity: 0.11,
    },
    checkBox: {
      outer: "#FEE0A3",
      inner: "#5F453A",
    },
    searchInput: {
      background: "#272727",
      text: "#888282",
    },
    textInput: {
      background: "#272727",
      backgroundOpacity: 0.7,
      text: "#493A3A",
    },
    validation: {
      valid: "#A3FBA1",
      invalid: "#ED7474",
    },
    myMessageGrad: {
      first: "#FFAA2A",
      second: "#E09EFF",
    },
    swipe: {
      //Взяти в Дениса кольори!
      read: {},
      select: {},
      notification: {},
      delete: {},
    },
    chatStatus: {
      color: "white",
      opacity: 0.95,
    },
    dangerRed: "#CE2500",
    greenCalm: "#0B8233",
    mainText: "#2B1D1D", //biba
    secondaryText: "#493A3A", //boba
    purpleSecondaryBtn: "#734CA5",
    link: "#1D80B8",
  },

  dark: {
    mainColor: "white",
    background: "black",
    card: "string",
    text: "white",
    border: "white",
    notification: "white",
    header_and_footer_background: "#161616",
    big_text: "white",
    statusbar: "light-content",
    backgroundChatGradient: {
      first: "#D7B168",
      second: "#D783FF",
    },
    backgroundGradient: {
      first: "#181818",
      second: "#181818",
      third: "#181818",
    },
    header: {
      backgroundGrad1: "#434343",
      backgroundGrad2: "#434343",
      backgroundGrad3: "#434343",
      headerPrimaryContent: "#2B1D1D",
    },
    transparentBtn: {
      backgroundColor: "white",
      zIndex: -1,
      opacity: 0.11,
    },
    checkBox: {
      outer: "#868686",
      inner: "#202020",
    },
    searchInput: {
      background: "#272727",
      text: "#888282",
    },
    textInput: {
      background: "#272727",
      backgroundOpacity: 0.7,
      text: "#493A3A",
    },
    validation: {
      valid: "#A3FBA1",
      invalid: "#ED7474",
    },
    myMessageGrad: {
      first: "#FFAA2A",
      second: "#E09EFF",
    },
    swipe: {
      //Взяти в Дениса кольори!
      read: {},
      select: {},
      notification: {},
      delete: {},
    },
    chatStatus: {
      color: "white",
      opacity: 0.95,
    },
    dangerRed: "#CE2500",
    greenCalm: "#0B8233",
    mainText: "white",
    secondaryText: "#493A3A",
    purpleSecondaryBtn: "#734CA5",
    link: "#1D80B8",
  },

  gradient_light: {},

  gradient_dark: {},

  gradient: {
    start: { x: 1, y: 0 },
    end: { x: 0, y: 1 },
    colors: ["#D7B168", "#D783FF"],
  },
};

export type Theme = typeof themes.light;

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: (theme_index: number) => void;
}>({
  theme: themes.light,
  toggleTheme: (theme_index: number) => {},
});

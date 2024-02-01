import React, { ReactNode, useEffect, useState } from "react";
import { ThemeContext, themes, Theme } from "./themes";
import { Appearance, useColorScheme } from "react-native";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const systemTheme = useColorScheme() === "dark";

  const systemThemeChangeEffect = () => {
    //console.log(systemTheme);
    setTheme(systemTheme ? themes.dark : themes.light);
  };

  useEffect(() => {
    systemThemeChangeEffect();
  }, [systemTheme]);

  const toggleTheme = (theme_index: number) => {
    switch (theme_index) {
      case 1: {
        systemThemeChangeEffect();
        break;
      }
      case 2: {
        setTheme(themes.dark);
        break;
      }
      case 3: {
        setTheme(themes.light);
        break;
      }
    }

    //setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

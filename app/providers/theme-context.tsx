import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SystemUI from "expo-system-ui";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (v: "light" | "dark") => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  useEffect(() => {
    (async () => {
      if (theme === "light") {
        await SystemUI.setBackgroundColorAsync("white");
        await AsyncStorage.setItem("theme", "light");
      } else {
        await SystemUI.setBackgroundColorAsync("black");
        await AsyncStorage.setItem("theme", "dark");
      }
    })();
  }, [theme]);
  useEffect(() => {
    (async () => {
      const themeFromStorage = await AsyncStorage.getItem("theme");
      console.log(themeFromStorage);
      if (!themeFromStorage) return;
      setTheme(themeFromStorage as any);
    })();
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

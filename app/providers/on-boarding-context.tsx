import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type OnBoardingContextType = {
  isOnBoarding: boolean;
  isLoading: boolean;
  reset: () => {};
};

export const OnBoardingContext = createContext<
  OnBoardingContextType | undefined
>(undefined);

export const OnBoardingProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOnBoarding, setIsOnBoarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const onceRef = useRef(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const setupIsFinish = await AsyncStorage.getItem("setup");
      if (setupIsFinish && setupIsFinish === "true") {
        setIsOnBoarding(false);
      } else {
        setIsOnBoarding(true);
      }
      const categoriesFav = await AsyncStorage.getItem("categories-fav");
      if (!categoriesFav) {
        setIsOnBoarding(true);
      }
      setIsLoading(false);
    })();
  }, []);
  useEffect(() => {
    if (!onceRef.current) {
      onceRef.current = true;
      return;
    }
    if (isLoading) return;
    if (isOnBoarding) {
      router.replace("/landing");
    } else {
      router.replace("/(tabs)");
    }
  }, [isOnBoarding, isLoading]);
  const reset = async () => {
    await AsyncStorage.multiRemove(["setup", "categories-fav"]);
    setIsOnBoarding(true);
  };
  return (
    <OnBoardingContext.Provider value={{ isOnBoarding, isLoading, reset }}>
      {children}
    </OnBoardingContext.Provider>
  );
};

export const useOnBoarding = () => {
  const context = useContext(OnBoardingContext);
  if (!context) {
    throw new Error("useOnBoarding must be used within OnBoardingProvider");
  }
  return context;
};

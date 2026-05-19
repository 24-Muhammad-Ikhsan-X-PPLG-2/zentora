import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import CATEGORY, { CategorySelect } from "../constants/category";

const useCategory = () => {
  const [categorySelect, setCategorySelect] =
    useState<CategorySelect[]>(CATEGORY);
  const addCategory = (id: number) => {
    setCategorySelect((prev) => {
      if (!prev) return prev;
      return prev.map((item) =>
        item.id === id
          ? {
              ...item,
              centrang: !item.centrang,
            }
          : item,
      );
    });
  };
  const removeCategory = (id: number) => {
    setCategorySelect((prev) => {
      if (!prev) return prev;
      return prev.map((item) =>
        item.id === id ? { ...item, centrang: false } : item,
      );
    });
  };
  const handlePressCategory = (id: number) => {
    const cariItemIdx = categorySelect.findIndex((val) => val.id == id);
    if (cariItemIdx === -1) return;
    if (categorySelect[cariItemIdx].centrang) {
      removeCategory(id);
    } else {
      addCategory(id);
    }
  };
  const handleContinue = async () => {
    const categoryCentrang = categorySelect.filter(
      (val) => val.centrang === true,
    );
    if (categoryCentrang.length < 3) return;
    await AsyncStorage.setItem(
      "categories-fav",
      JSON.stringify(categoryCentrang),
    );
    router.replace("/(tabs)");
  };
  return {
    handlePressCategory,
    categorySelect,
    handleContinue,
  };
};

export default useCategory;

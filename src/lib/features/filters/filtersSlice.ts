import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type FilterState = {
  categories: string[];
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
  dressStyles: string[];
  sortBy: "most-popular" | "low-price" | "high-price";
  currentPage: number;
  itemsPerPage: number;
};

const initialState: FilterState = {
  categories: [],
  priceRange: [0, 3000],
  colors: [],
  sizes: [],
  dressStyles: [],
  sortBy: "most-popular",
  currentPage: 1,
  itemsPerPage: 9,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      const index = state.categories.indexOf(action.payload);
      if (index > -1) {
        state.categories.splice(index, 1);
      } else {
        state.categories.push(action.payload);
      }
      state.currentPage = 1; // Reset to first page when filter changes
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
      state.currentPage = 1;
    },
    toggleColor: (state, action: PayloadAction<string>) => {
      const index = state.colors.indexOf(action.payload);
      if (index > -1) {
        state.colors.splice(index, 1);
      } else {
        state.colors.push(action.payload);
      }
      state.currentPage = 1;
    },
    toggleSize: (state, action: PayloadAction<string>) => {
      const index = state.sizes.indexOf(action.payload);
      if (index > -1) {
        state.sizes.splice(index, 1);
      } else {
        state.sizes.push(action.payload);
      }
      state.currentPage = 1;
    },
    toggleDressStyle: (state, action: PayloadAction<string>) => {
      const index = state.dressStyles.indexOf(action.payload);
      if (index > -1) {
        state.dressStyles.splice(index, 1);
      } else {
        state.dressStyles.push(action.payload);
      }
      state.currentPage = 1;
    },
    setSortBy: (
      state,
      action: PayloadAction<"most-popular" | "low-price" | "high-price">
    ) => {
      state.sortBy = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    resetFilters: (state) => {
      state.categories = [];
      state.priceRange = [0, 3000];
      state.colors = [];
      state.sizes = [];
      state.dressStyles = [];
      state.sortBy = "most-popular";
      state.currentPage = 1;
    },
  },
});

export const {
  toggleCategory,
  setPriceRange,
  toggleColor,
  toggleSize,
  toggleDressStyle,
  setSortBy,
  setCurrentPage,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;

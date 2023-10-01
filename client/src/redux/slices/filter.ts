import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IPostFilterOptions {
  tag: string;
  sort: string;
  search: string;
  limit?: number;
  currentPage?: number;
}

const initialState: IPostFilterOptions = {
  search: "",
  tag: "",
  sort: "",
  limit: 5,
  currentPage: 1
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setTag: (state, action: PayloadAction<string>) => {
      state.tag = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    updateCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage += action.payload;
    }
  }
});

export const selectCurrentPage = (state: RootState) => state.filter.currentPage;

export const { setTag, setSort, setSearch, updateCurrentPage } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;

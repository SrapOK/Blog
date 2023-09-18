import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IPostFilterOptions {
  tag: string;
  sort: "new" | "popular" | "";
  search: string;
}

const initialState: IPostFilterOptions = {
  search: "",
  tag: "",
  sort: ""
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
    setSort: (state, action) => {
      state.sort = action.payload;
    }
  }
});

export const { setTag, setSort, setSearch } = filterSlice.actions;

export const filterReduser = filterSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IPostFilterOptions {
  tag: string;
  sort: "new" | "popular" | "";
}

const initialState: IPostFilterOptions = {
  tag: "",
  sort: ""
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTag: (state, action: PayloadAction<string>) => {
      state.tag = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    }
  }
});

export const { setTag, setSort } = filterSlice.actions;

export const filterReduser = filterSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IComponentsInitialState {
  BurgerMenu: boolean;
  isMobile: boolean;
}

const initialState: IComponentsInitialState = {
  BurgerMenu: false,
  isMobile: innerWidth < 768
};

const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    toggleBurgerMenu: (state) => {
      state.BurgerMenu = !state.BurgerMenu;
    },
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    }
  }
});

export const { toggleBurgerMenu, setIsMobile } = componentsSlice.actions;

export const componentsReducer = componentsSlice.reducer;

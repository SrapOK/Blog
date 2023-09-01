import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AUTH_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  USER_ROUTE
} from "../../utils/consts";

import { RootState } from "../store";
import { checkApi, loginApi, registerApi } from "../../http/UserAPI";

type status = "pending" | "fulfilled" | "rejected";

export const fetchLogin = createAsyncThunk(
  `${USER_ROUTE}${LOGIN_ROUTE}`,
  loginApi
);

export const fetchRegister = createAsyncThunk(
  `${USER_ROUTE}${REGISTRATION_ROUTE}`,
  registerApi
);

export const fetchCheck = createAsyncThunk(
  `${USER_ROUTE}${AUTH_ROUTE}`,
  checkApi
);

interface IAuthSliceInitialState {
  data: any | null;
  status: status;
}

const initialState: IAuthSliceInitialState = {
  data: null,
  status: "pending"
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    }
  },
  extraReducers(builder) {
    builder
      //login
      .addCase(fetchLogin.pending, (state) => {
        state.data = null;
        state.status = "pending";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.data = null;
        state.status = "rejected";
      })
      //Check
      .addCase(fetchCheck.pending, (state) => {
        state.data = null;
        state.status = "pending";
      })
      .addCase(fetchCheck.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchCheck.rejected, (state) => {
        state.data = null;
        state.status = "rejected";
      })
      //Register
      .addCase(fetchRegister.pending, (state) => {
        state.data = null;
        state.status = "pending";
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.data = null;
        state.status = "rejected";
      });
  }
});

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);

export const authReduser = authSlice.reducer;

export const { logout } = authSlice.actions;

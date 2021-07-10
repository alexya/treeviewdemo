import React from "react";
import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";

export interface TreeViewContextType {
  state: State;
  dispatch?: React.Dispatch<AnyAction>;
}

export interface State {
  selectedItem: string;
}

export const initialState: State = {
  selectedItem: ""
};

export const slice = createSlice({
  name: "treeviewmanager",
  initialState,
  reducers: {
    selectionChange: (state, action: PayloadAction<string>) => {
      state.selectedItem = action.payload;
    }
  }
});

export const { selectionChange } = slice.actions;
export default slice.reducer;

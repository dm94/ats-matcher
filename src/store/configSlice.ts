import { AIConfig } from "@/types/Config";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./local";

export interface ConfigState {
  config?: AIConfig;
}

const configSliceName = "ai-config";

const initialState: ConfigState = loadState(configSliceName) ?? {
  config: {
    baseURL: "https://api.openai.com/v1",
    model: "gpt-4o",
    compatibility: "compatible",
  }
};

export const configSlice = createSlice({
  name: configSliceName,
  initialState,
  reducers: {
    setConfigState: (state, action: PayloadAction<AIConfig>) => {
      state.config = action.payload;
    },
  },
});

export const { setConfigState } = configSlice.actions;
export const configReducer = configSlice.reducer;
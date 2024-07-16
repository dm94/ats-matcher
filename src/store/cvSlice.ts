import { CurriculumVidaeType } from "@/types/CurriculumVitae";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./local";

export interface CVState {
  curriculumState?: CurriculumVidaeType;
}

const cvSliceName = "cv";

const initialState: CVState = loadState(cvSliceName) ?? {};

export const cvSlice = createSlice({
  name: cvSliceName,
  initialState,
  reducers: {
    setCvState: (state, action: PayloadAction<CurriculumVidaeType>) => {
      state.curriculumState = action.payload;
    },
  },
});

export const { setCvState } = cvSlice.actions;
export const cvReducer = cvSlice.reducer;
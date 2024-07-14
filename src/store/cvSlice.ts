import { CurriculumVidaeType } from "@/types/CurriculumVitae";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CVState {
  curriculumState?: CurriculumVidaeType;
}

const initialState: CVState = {
  curriculumState: undefined,
};

export const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    setCvState: (state, action: PayloadAction<CurriculumVidaeType>) => {
      state.curriculumState = action.payload;
    },
  },
});

export const { setCvState } = cvSlice.actions;
export const cvReducer = cvSlice.reducer;
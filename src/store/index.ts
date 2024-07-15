import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { saveState } from "./local";
import { cvReducer } from "@/store/cvSlice";

const reducer = combineReducers({
  "cv": cvReducer,
});

export const store = configureStore({
  reducer,
});

store.subscribe(() => {
  const data = store.getState();
  Object.keys(data).forEach((key: string) => {
    saveState(data[key as keyof typeof data], key)
  })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
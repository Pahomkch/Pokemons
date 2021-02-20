import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TAppStateType, TDispatch } from "../redux/store";

export const useAppDispatch = () => useDispatch<TDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppStateType> = useSelector;

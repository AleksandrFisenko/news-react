import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState } from "../redux/reducers/rootReducer";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

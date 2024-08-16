import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState } from "../redux/reducers";

export const useTypedSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

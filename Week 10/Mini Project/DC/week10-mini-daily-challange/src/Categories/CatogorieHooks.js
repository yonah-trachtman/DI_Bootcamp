import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { tasks, categories, state } from "./catogoriesSlice";


export const useCatogorySelector = () => {
  const selector = createSelector([categories], (categories) => {
          return categories
  })

  return useSelector(selector)
};
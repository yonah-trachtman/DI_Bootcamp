import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { books, error, status, genre, state } from "./bookSlice";




export const useBookSelector = () => {
    const selector = createSelector([books, genre], (books, genre) => {
        if (genre == -1) {
            return books
        } else {
            return books.filter((books) => books.genre == genre)
        }
    })

    return useSelector(selector)
};


export const useBookStatus = () => {
    const selector = createSelector(state, (state) => state.status);
    return useSelector(selector);
};

export const useBookError = () => {
    const selector = createSelector(state, (state) => state.error);
    return useSelector(selector);
};

export const useBookgenre = () => {
    const selector = createSelector(state, (state) => state.genre);
    return useSelector(selector);
};
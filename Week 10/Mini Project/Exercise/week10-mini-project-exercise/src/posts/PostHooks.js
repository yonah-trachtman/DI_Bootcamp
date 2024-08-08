import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { posts, status, error, auther, state} from "./postsSlice";




export const usePostSelector = () => {
    const selector = createSelector([posts, auther], (posts, auther) => {
        if (auther == -1) {
            return posts
        } else {
            return posts.filter((posts) => posts.userId == auther)
        }
    })

    return useSelector(selector)
    // const selector = createSelector(state, (state) => state.posts);
    // return useSelector(selector);
};


export const usePostStatus = () => {
    const selector = createSelector(state, (state) => state.status);
    return useSelector(selector);
};

export const usePostError = () => {
    const selector = createSelector(state, (state) => state.error);
    return useSelector(selector);
};

export const usePostAuther = () => {
    const selector = createSelector(state, (state) => state.auther);
    return useSelector(selector);
};
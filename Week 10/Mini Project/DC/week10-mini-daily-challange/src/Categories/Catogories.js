import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCatogorySelector } from './CatogorieHooks';
import { addCategory } from "./catogoriesSlice"

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useCatogorySelector()
  const newCatogorie = useRef(null)

  return (
    <>
    <input value={newCatogorie.current}/>
    <button></button>
    </>
  )
}

export default Categories;
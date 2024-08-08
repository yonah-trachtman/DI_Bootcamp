import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterGenre } from '../Books/bookSlice';


const Genres = (props) => {
  const dispatch = useDispatch();
  const genres  = useSelector((state) => state.genreReducer);




  return (
    <>
    <h3>Genre</h3>
    <select onChange={(e) => dispatch(filterGenre(e.target.value))}>
        <option value={-1}>All</option>
    {genres && genres.map((genre) => { return (
        <option key={genre.id} value={genre.genre}>{genre.genre}</option>
      ) }
      )}
      </select>
    </>
  );
}


export default Genres;
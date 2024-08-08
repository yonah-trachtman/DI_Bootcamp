import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useBookSelector, useBookError, useBookStatus, useBookgenre } from './booksHooks';
import Genres from '../Genre/Genres';

const Books = (props) => {
  const dispatch = useDispatch();
  const books  = useBookSelector();
  const status  = useBookStatus();
  const error = useBookError();
  const genre = useBookgenre()



  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  const renderBooks = books.map(book => {
    return (
        <div key={book.id}>
        <h2 >{book.title}</h2>
        <p>{book.author}</p>
        <p><i>-{book.genre}-</i></p>
        </div>
      ) })
      


  return (
    <>
    <h1>Book:</h1>
    <Genres/>
    {renderBooks}
    </>
  );
}


export default Books;
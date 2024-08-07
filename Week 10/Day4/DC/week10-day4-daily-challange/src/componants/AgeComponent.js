
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from './ageSlice';


const AgeCounter = () => {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.age.age);
  const loading = useSelector((state) => state.age.loading);

  const handleAgeUp = () => {
    dispatch(ageUpAsync(1));
  };

  const handleAgeDown = () => {
    dispatch(ageDownAsync(1));
  };

  return (
    <div>
      <h1>Age: {age}</h1>
      <button onClick={handleAgeUp}>Increase Age</button>
      <button onClick={handleAgeDown}>Decrease Age</button>
    </div>
  );
};

export default AgeCounter;

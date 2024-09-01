"use client";
import React from 'react';
import { ClimbingBoxLoader, DotLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <ClimbingBoxLoader
        color="#7130d2"
        size={25}
        speedMultiplier={1}
      />
      </div>
  );
};

export default Loading;

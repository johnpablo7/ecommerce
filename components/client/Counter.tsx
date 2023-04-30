"use client";
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Counter {count}
      <div className="p-4">
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </div>
    </div>
  );
};

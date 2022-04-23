import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("age"));
  console.log(searchParams.get("city"));
  const age = searchParams.get("age");
  const city = searchParams.get("city");

  return (
    <div>
      <h1>This Age :{age}</h1>
      <h1>This city of: {city}</h1>
      <input
        type="text"
        onChange={(e) => setSearchParams({ city: e.target.value, Age: 40 })}
      />
      <button onClick={() => setSearchParams({ age: 40 })}> Set Age</button>
    </div>
  );
}

export default Filter;

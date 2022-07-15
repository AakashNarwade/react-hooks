import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);
  const hRef = useRef(null);

  const onClick = () => {
    // inputRef.current.value = "";
    console.log(inputRef.current.value);
    console.log(hRef.current.innerText);
  };
  return (
    <div>
      <h1 ref={hRef}>Aakash</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;

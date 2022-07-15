import React, { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    // console.log("useEffect is called");
    inputRef.current.value = "this is me ";
  }, []);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  return (
    <div className="app">
      <input value="aakash" ref={inputRef} style={{ width: 400, height: 60 }} />
    </div>
  );
};

export default LayoutEffectTutorial;

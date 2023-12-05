import { useState } from "react";
import "./App.css";
import GetInput from "./components/GetInput";
import Grid from "./components/Grid";

function App() {
  const [needValue, setNeedValue] = useState(true);
  const [size, setSize] = useState(0);
  const [res, setRes] = useState([[0]]);

  const handleSubmit = (val: string) => {
    console.log(val);
    setSize(parseInt(val));
    setNeedValue(false);
    setRes(genArray(parseInt(val)));
    console.log(genArray(parseInt(val)));
  };

  const genArray = (size: number) => {
    const result = Array.from({ length: size }, (_, i) =>
      Array.from({ length: size }, (_, x) => (x + 1) * (i + 1))
    );
    return result;
  };

  return (
    <>
      {needValue ? (
        <GetInput onSubmit={handleSubmit}></GetInput>
      ) : (
        <>
          <p style={{ fontSize: 40, color: "rgb(165, 114, 165)" }}>{size}</p>
          <Grid data={res}></Grid>
        </>
      )}
    </>
  );
}

export default App;

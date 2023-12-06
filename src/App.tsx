import { useState } from "react";
import "./App.css";
import GetInput from "./components/GetInput";
import Grid from "./components/Grid";
import axios from "axios";

type Joke = {
  id: number;
  punchline: string;
  setup: string;
  type: string;
};

function App() {
  const [needValue, setNeedValue] = useState(true);
  const [size, setSize] = useState(0);
  const [res, setRes] = useState([[0]]);

  const handleSubmit = (val: string) => {
    getNumber().then((data) => {
      setSize(data);
      setNeedValue(false);
      setRes(genArray(data));
    });

    // console.log(getJoke().punchline);
    // getJokeAsync().then((data) => console.log(data.punchline));
  };

  const getJoke = () => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        return response.data;
      })
      .catch((e) => console.log(e));
  };

  const getJokeAsync = async (): Promise<Joke> => {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      return response.data;
    } catch (e) {
      console.error(e);
      return {
        id: 0,
        punchline: "",
        setup: "",
        type: "",
      };
    }
  };

  const getNumber = async () => {
    try {
      const response = await axios({
        url: "http://localhost/phptests/genNumber.php",
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
          min: 1,
          max: 3,
        },
      });
      return response.data;
    } catch (e) {
      console.error(e);
    }
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

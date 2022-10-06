import "./styles.css";
import axios from "axios";
import { useState } from "react";
export default function App() {
  const [quote, setQuote] = useState("");

  const handleClick = () => {
    const options = {
      method: "POST",
      url: "https://motivational-quotes1.p.rapidapi.com/motivation",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "f01cd2e788msh79a1ca825ebb054p16395bjsn9d20a26b241c",
        "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com"
      },
      data: '{"key1":"value","key2":"value"}'
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setQuote(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="App">
      Hello there <br />
      <button onClick={handleClick}> Get Quote</button>
      <div>{quote !== "" ? <p>{quote}</p> : <p>Quote will appear here</p>}</div>
    </div>
  );
}

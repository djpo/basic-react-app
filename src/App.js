import { useState, useEffect } from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';


function App() {
  const [response, setResponse] = useState("(none)");
  const [error, setError] = useState("(none)");
  const [isLoading, setIsLoading] = useState(true);

  const params = {
    method: "GET",
    url: "https://poppe.club/api",
  };

  const fetchData = async (params) => {
    try {
      // const result = await axios.request(params);
      // console.log(result);
      // setResponse(result.message);


      // fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
      //   .then(response => response.json())
      //     .then(result => {
      //       // console.log("result:");
      //       // console.log(result);
      //       // console.log(result.species.name);
      //       // console.log("result.species.name:");
      //       setResponse(result.species.name);
      //     });


      fetch("https://poppe.club/api/", {
        method: 'GET',
        // withCredentials: true,
        crossorigin: true,
        mode: 'no-cors',
      })
        .then(response => response.json())
          .then(result => {
            console.log("result:");
            console.log(result);
            // console.log(result.species.name);
            // console.log("result.species.name:");
            // setResponse(result.species.name);
          });

    } catch (err) {
      console.log("err!");
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(params);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>
          response: {response}
        </p>

        <p>
          error: {error}
        </p>

        <p>
          isLoading: {isLoading ? "true" : "false"}
        </p>
      </header>
    </div>
  );
}

export default App;

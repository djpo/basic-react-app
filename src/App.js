import { useState, useEffect } from "react";
// import axios from "axios";
import logo from './logo.svg';
import './App.css';


function App() {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState("(none)");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    const fetchUrl = "https://poppe.club/api";
    // const fetchUrl = "http://localhost:5000/api";
    // const fetchUrl = "https://pokeapi.co/api/v2/pokemon/pikachu/";

    try {
      // // 1. axios
      // const result = await axios.request(params);
      // console.log(result);
      // setResponse(result.message);

      // // 2. fetch, .then
      // fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
      //   .then(response => response.json())
      //     .then(result => {
      //       setResponse(result.species.name);
      //     });

      fetch(fetchUrl)
        .then(response => {
          console.log("response:");
          console.log(response);
          return response.json();
        })
        .then(data => {
          console.log("data:");
          console.log(data);
          setApiData(data);
        });


      // // 3. async await
      // const response = await fetch(fetchUrl);
      // console.log("response:");
      // console.log(response);

      // const data = await response.json();
      // console.log("data:");
      // console.log(data);

    } catch (err) {
      console.log("err:");
      console.log(err);
      setError(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>basic-react-app</h2>
        <h5>connect to remote express server</h5>

        <p>{isLoading
          ? <span style={{color: 'orange'}}>loading</span>
          : <span style={{color: 'lightblue'}}>not loading</span>
        }</p>

        <p>apiData: {apiData?.message}</p>

        <p>error: {error}</p>
      </header>
    </div>
  );
}

export default App;

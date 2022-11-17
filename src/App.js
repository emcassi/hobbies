import { useState } from "react";
import styles from "./App.module.css";
import Button from "./Button";
import Footer from "./Footer";
import HobbyView from "./HobbyView";

function App() {
  const [hobby, setHobby] = useState();

  const handleButtonClicked = (event) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9fa785df16msh0d11cacf77192a8p107815jsnaf73c34e9334",
        "X-RapidAPI-Host": "hobbies-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch(
      "https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies?category=general",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setHobby(response.hobby);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.app}>
      <HobbyView hobby={hobby} />
      <Button image="arrows-rotate.svg" style={{backgroundColor: "#C89933"}} onClick={handleButtonClicked}>Get new hobby</Button>
      <Footer />
    </div>
  );
}

export default App;

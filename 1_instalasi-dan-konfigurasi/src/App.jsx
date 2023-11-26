import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header />
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}

export default App;

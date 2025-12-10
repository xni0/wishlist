import "./App.css";
import WishInput from "./WishInput/WishInput";
import WishList from "./WishList/WishList";
import { useState } from "react";

let initialWishes = [
  { id: 1, text: "Travel to Japan", completed: false },
  { id: 2, text: "Learn to play the guitar", completed: true },
  { id: 3, text: "Write a book", completed: false },
];

function App() {
  const [wishes, setWishes] = useState(initialWishes);

  function onNewWish(newWish){
    // adding the new wish to the array of wishes
    setWishes((currentWishes) => [...currentWishes, newWish]);
  }

  return (
    <div className="app">
      <h1>My Wishlist</h1>

      <WishInput onNewWish={onNewWish}/>
      <WishList wishes={wishes} />
      <button>Achieve all wishes</button>
    </div>
  );
}

export default App;

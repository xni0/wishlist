import { useState } from "react";

function WishInput({ onNewWish }) {
  const [newWish, setNewWish] = useState("");

  function addWish() {
    if (newWish === "") return;

    const newWishObject = {
      id: Date.now(),
      text: newWish,
      completed: false,
    };

    onNewWish(newWishObject);
    setNewWish("");
  }

  function handleKeyUp(ev) {
    if (ev.key === "Enter") addWish();
  }

  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>

      <input
        value={newWish}
        type="text"
        onChange={(ev) => setNewWish(ev.target.value)}
        onKeyUp={handleKeyUp}
        placeholder="My new wish..."
      />

      <button onClick={addWish}>Add Wish</button>
    </fieldset>
  );
}

export default WishInput;
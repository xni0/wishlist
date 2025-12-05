import "./App.css";

let wishes = [
  { id: 1, text: "Travel to Japan", completed: false },
  { id: 2, text: "Learn to play the guitar", completed: true },
  { id: 3, text: "Write a book", completed: false },
];

function App() {
  return (
    <div className="app">
      <h1>My Wishlist</h1>

      <fieldset className="wish-input">
        <legend className="wish-input__label">New wish</legend>
        <input type="text" placeholder="My new wish..." />
        <button>Add Wish</button>
      </fieldset>

      <ul className="wish-list">
        {wishes.map((wish) => (
          // render the wish text inside a list item
          <li
            key={wish.id}
            className={`wish-list__item 
          ${wish.completed ? "wish-list__item--done" : ""}`}
          >
            <input
              type="checkbox"
              checked={wish.completed}
              id={`wish_${wish.id}`}
            />
            <label htmlFor={`wish_${wish.id}`}>{wish.text}</label>
          </li>
        ))}
      </ul>
      <button>Achieve all wishes</button>
    </div>
  );
}

export default App;

// App.js
import React, { useState } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import "./App.css";

const initialCards = [
  { id: 1, text: "Card One" },
  { id: 2, text: "Card Two" },
  { id: 3, text: "Card Three" },
  { id: 4, text: "Card Four" }
];

function App() {
  const [cards, setCards] = useState(initialCards);

  return (
    <div className="container">
      <h2>Draggable Cards</h2>
      <Reorder.Group
        axis="y"
        values={cards}
        onReorder={setCards}
        className="card-list"
      >
        <AnimatePresence>
          {cards.map((card) => (
            <Reorder.Item
              key={card.id}
              value={card}
              whileDrag={{ scale: 1.05 }}
              layout
              className="card"
            >
              {card.text}
            </Reorder.Item>
          ))}
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
}

export default App;

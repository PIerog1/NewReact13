import { useState } from "react";

function CartCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Liczba przedmiotów: {count}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>
        Dodaj
      </button>

      <button onClick={() => setCount(prev => prev + 5)}>
        Dodaj 5
      </button>

      <button onClick={() => setCount(prev => prev * 2)}>
        Podwój
      </button>

      <button onClick={() => setCount(prev => Math.max(0, prev - 1))}>
        Usuń
      </button>
    </div>
  );
}

export default CartCounter;
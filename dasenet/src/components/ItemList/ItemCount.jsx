import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount() {
  const [count, setCount] = useState(0);

  const addCountHandler = () => {
    setCount(count + 1);
  };
  const removeCountHandler = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="Contadores">
      <button onClick={removeCountHandler} className="ContadorMenos">
        -
      </button>
      {count}
      <button onClick={addCountHandler} className="ContadorMas">
        +
      </button>
    </div>
  );
}
